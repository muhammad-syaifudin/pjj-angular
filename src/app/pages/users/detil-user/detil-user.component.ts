import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detil-user',
  templateUrl: './detil-user.component.html',
  styleUrls: ['./detil-user.component.css'],
})
export class DetilUserComponent implements OnInit {
  idUser: string | null = '';
  detailUser: User | null = null;

  constructor(
    private router: ActivatedRoute,
    private serviceUser: UserService,
    private nzMessageService: NzMessageService
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe(parameter => {
      const id = parameter.get('id');
      this.idUser = id;
      this.getDetailUser();
    });
  }

  getDetailUser() {
    const idDicari = parseInt(this.idUser || '');
    // get user by id
    this.serviceUser.get(idDicari).subscribe(
      responseData => {
        this.detailUser = responseData;
      },
      _error => {
        this.detailUser = null;
        const err = _error as Error;
        this.nzMessageService.error(
          `An error occurred while fetching the item (${err.message})`
        );
      }
    );
  }
}
