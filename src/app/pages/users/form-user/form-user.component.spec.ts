import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { HttpClientModule } from '@angular/common/http';

import { FormUserComponent } from './form-user.component';
import { UserService } from 'src/app/services/user.service';

describe('FormUserComponent', () => {
  let component: FormUserComponent;
  let fixture: ComponentFixture<FormUserComponent>;
  let userService: UserService;
  let router: Router;

  const user = {
    id: 4572,
    uid: 'fefd0ca4-96b9-4b4d-bbf0-ac7579147cc7',
    password: 'K5Di1boVpX',
    first_name: 'Larry',
    last_name: 'Labadie',
    username: 'larry.labadie',
    email: 'larry.labadie@email.com',
    avatar: 'https://robohash.org/earummagnammaxime.png?size=300x300&set=set1',
    gender: 'Male',
    phone_number: '+252 205-030-7937',
    social_insurance_number: '383909124',
    date_of_birth: '1984-05-15',
    employment: {
      title: 'Marketing Assistant',
      key_skill: 'Confidence',
    },
    address: {
      city: 'Keeblerland',
      street_name: 'Avery Walk',
      street_address: '5040 Corkery Port',
      zip_code: '30059-4223',
      state: 'South Dakota',
      country: 'United States',
      coordinates: {
        lat: 42.510499800510416,
        lng: -146.77660383354822,
      },
    },
    credit_card: {
      cc_number: '6771-8976-8397-7832',
    },
    subscription: {
      plan: 'Free Trial',
      status: 'Active',
      payment_method: 'Bitcoins',
      term: 'Annual',
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzSpaceModule,
      ],
      declarations: [FormUserComponent],
      providers: [
        UserService,
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: 4572 }) },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    router = TestBed.inject(Router);

    spyOn(router, 'navigate').and.stub();

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form correctly', () => {
    expect(component.updateForm).toBeDefined();
    expect(component.updateForm.get('first_name')).toBeTruthy();
    expect(component.updateForm.get('last_name')).toBeTruthy();
    expect(component.updateForm.get('email')).toBeTruthy();
    expect(component.updateForm.get('username')).toBeTruthy();
    expect(component.updateForm.get('title')).toBeTruthy();
  });

  it('should save user', () => {
    spyOn(userService, 'addUser');
    component.saveUser();
    expect(userService.addUser).toHaveBeenCalled();
  });

  it('should update user and navigate to the user list', () => {
    const updatedUser = {
      ...user,
      id: 4572,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@email.com',
      username: 'john.doe',
      employment: {
        ...user.employment,
        title: 'Software Engineer',
      },
    };

    spyOn(userService, 'updateDataById').and.returnValue(of([updatedUser]));

    component.isEdit = true;
    component.user = updatedUser;
    component.updateForm.setValue({
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@email.com',
      username: 'john.doe',
      title: 'Software Engineer',
    });
    component.submitForm();

    expect(userService.updateDataById).toHaveBeenCalledWith(
      updatedUser.id,
      updatedUser
    ); // Check the user ID
    expect(router.navigate).toHaveBeenCalledWith(['/users']);
  });

  it('should navigate to the user list when "Back to List" button is clicked', () => {
    component.backToList();

    expect(router.navigate).toHaveBeenCalledWith(['/users']);
  });
});
