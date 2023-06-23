import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';

import { User } from '../interfaces/user';

@Injectable()
export class UserService {
  users: User[] = [];

  url = 'https://random-data-api.com/api/v2/users?';
  localStorageKey = 'userData';

  constructor(private http: HttpClient) {}

  private generateAvatarUrl(user: User, index: number): string {
    const gender = user.gender === 'Male' ? 'male' : 'female';
    return `https://xsgames.co/randomusers/assets/avatars/${gender}/${
      index + 1
    }.jpg`;
  }

  fetchAll(): Observable<User[]> {
    const data = localStorage.getItem(this.localStorageKey);

    if (data) {
      return of(JSON.parse(data));
    } else {
      const list = this.http.get<User[]>(`${this.url}size=5`);
      const userList = list.pipe(
        map(items => {
          const newlist = items.map((user: User, index) => {
            user.avatar = this.generateAvatarUrl(user, index);
            return user;
          });
          localStorage.setItem(this.localStorageKey, JSON.stringify(newlist));
          return newlist;
        })
      );
      return userList;
    }
  }

  fetchOne(): Observable<User> {
    return this.http.get<User>(`${this.url}size=1`);
  }

  get(id: number): Observable<User> {
    return new Observable(observer => {
      this.fetchAll().subscribe(
        data => {
          const filteredData = data.find((item: User) => item.id === id);
          if (filteredData) {
            observer.next(filteredData);
          } else {
            observer.error(new Error('Data not found'));
          }
          observer.complete();
        },
        error => {
          observer.error(error);
          observer.complete();
        }
      );
    });
  }

  addUser(): Observable<User[]> {
    return this.fetchOne().pipe(
      switchMap(response => {
        const newData = response;
        return this.fetchAll().pipe(
          tap(data => {
            const avatar = this.generateAvatarUrl(newData, data.length);
            const updatedData = [...data, { ...newData, avatar }];
            localStorage.setItem(
              this.localStorageKey,
              JSON.stringify(updatedData)
            );
          })
        );
      }),
      catchError(error => {
        console.error('Error fetching data:', error);
        return this.fetchAll();
      })
    );
  }

  updateDataById(id: number, updatedData: User): Observable<User[]> {
    return this.fetchAll().pipe(
      tap(data => {
        const updatedIndex = data.findIndex((item: User) => item.id === id);
        if (updatedIndex > -1) {
          data[updatedIndex] = { ...data[updatedIndex], ...updatedData };
          localStorage.setItem(this.localStorageKey, JSON.stringify(data));
        }
      })
    );
  }

  deleteDataById(id: number): Observable<User[]> {
    return this.fetchAll().pipe(
      map(data => data.filter((item: User) => item.id !== id)),
      tap(filteredData => {
        localStorage.setItem(
          this.localStorageKey,
          JSON.stringify(filteredData)
        );
      })
    );
  }
}
