import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { IUserForm, User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  user: User = {
    id: 0,
    uid: '',
    password: '',
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    avatar: '',
    gender: '',
    phone_number: '',
    social_insurance_number: '',
    date_of_birth: '2000-01-01',
    employment: {
      title: '',
      key_skill: '',
    },
    address: {
      city: '',
      street_name: '',
      street_address: '',
      zip_code: '',
      state: '',
      country: '',
      coordinates: {
        lat: 0,
        lng: 0,
      },
    },
    credit_card: {
      cc_number: '',
    },
    subscription: {
      plan: '',
      status: '',
      payment_method: '',
      term: '',
    },
  };

  isEdit = false;
  updateForm!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();

    this.route.params
      .pipe(
        switchMap((params: Params) => {
          const id = params['id'];
          if (id) {
            this.isEdit = true;
            return this.userService.get(parseInt(id));
          }
          return [];
        })
      )
      .subscribe(userdariAPI => {
        this.user = userdariAPI;
        this.updateForm.patchValue({
          first_name: userdariAPI.first_name,
          last_name: userdariAPI.last_name,
          email: userdariAPI.email,
          username: userdariAPI.username,
          title: userdariAPI.employment.title,
        });
        this.updateForm.updateValueAndValidity();
      });
  }

  initializeForm() {
    this.updateForm = this.formBuilder.group({
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      username: [null, [Validators.required]],
      title: [null, [Validators.required]],
    });
  }

  saveUser() {
    this.userService.addUser();
  }

  submitForm(): void {
    if (this.isEdit) {
      const editForm = this.updateForm.value as IUserForm;
      const updatedUser: User = {
        ...this.user,
        first_name: editForm.first_name,
        last_name: editForm.last_name,
        email: editForm.email,
        username: editForm.username,
        employment: { ...this.user.employment, title: editForm.title },
      };

      // Update the user object here
      this.user = { ...updatedUser };

      this.userService
        .updateDataById(updatedUser.id, updatedUser)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .subscribe(response => {
          this.backToList();
        });
    }
  }

  backToList(): void {
    this.router.navigate(['/users']);
  }
}
