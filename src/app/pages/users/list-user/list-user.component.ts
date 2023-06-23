import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { EMPTY, Observable, concatMap } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  data!: User[];
  isLoading = false;

  constructor(
    private userService: UserService,
    private nzMessageService: NzMessageService
  ) {}

  cancel(): void {
    this.nzMessageService.info('delete canceled');
  }

  confirm(userId: number): void {
    this.deleteItem(userId);
  }

  beforeConfirm(): Observable<boolean> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(true);
        observer.complete();
      }, 3000);
    });
  }
  fetchData(): void {
    this.isLoading = true;
    this.userService.fetchAll().subscribe(
      response => {
        this.data = response;
        this.isLoading = false;
      },
      _error => {
        const err = _error as Error;
        this.nzMessageService.error(
          `An error occurred while fetching the data (${err.message})`
        );
        this.isLoading = false;
      }
    );
  }

  addUser(): void {
    this.isLoading = true;
    this.userService.addUser().subscribe(
      response => {
        if (response && response.length > 0) {
          this.ngOnInit();
          this.isLoading = false;
        }
      },
      _error => {
        const err = _error as Error;
        this.nzMessageService.error(
          `An error occurred while adding the item (${err.message})`
        );
        this.isLoading = false;
      }
    );
  }

  deleteItem(id: number): void {
    this.isLoading = true;
    this.beforeConfirm()
      .pipe(
        concatMap((confirmed: boolean) => {
          if (confirmed) {
            return this.userService.deleteDataById(id);
          } else {
            return EMPTY;
          }
        })
      )
      .subscribe(
        () => {
          this.ngOnInit();
          this.nzMessageService.info('Item deleted successfully');
        },
        _error => {
          const err = _error as Error;
          this.nzMessageService.error(
            `An error occurred while deleting the item (${err.message})`
          );
        }
      );
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.fetchData();
  }
}
