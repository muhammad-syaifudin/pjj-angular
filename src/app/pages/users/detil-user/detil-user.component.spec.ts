import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { DetilUserComponent } from './detil-user.component';
import { UserService } from 'src/app/services/user.service';
import { of, throwError } from 'rxjs';
import { UsiaPipe } from 'src/app/pipes/usia.pipe';
import { NzMessageService } from 'ng-zorro-antd/message';

describe('DetilUserComponent', () => {
  let component: DetilUserComponent;
  let fixture: ComponentFixture<DetilUserComponent>;
  let userService: UserService;
  let messageService: NzMessageService;

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
      declarations: [DetilUserComponent, UsiaPipe],
      imports: [HttpClientModule, NzButtonModule, NzSpaceModule, NzCardModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              get: (key: string) => user.id.toString(),
            }),
          },
        },
        UserService,
        NzMessageService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetilUserComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    messageService = TestBed.inject(NzMessageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set idUser and call getDetailUser', () => {
    expect(component.idUser).toBe(user.id.toString());
    spyOn(userService, 'get').and.returnValue(of(user));
    component.getDetailUser();
    expect(userService.get).toHaveBeenCalledWith(user.id);
  });

  it('should set detailUser on successful service response', () => {
    spyOn(userService, 'get').and.returnValue(of(user));
    component.getDetailUser();
    expect(component.detailUser).toEqual(user);
  });

  it('should set detailUser to null on service error', () => {
    const error = new Error('Service error');
    spyOn(userService, 'get').and.returnValue(throwError(error));
    spyOn(messageService, 'error');

    component.getDetailUser();

    expect(component.detailUser).toBeNull();
    expect(messageService.error).toHaveBeenCalledWith(
      `An error occurred while fetching the item (${error.message})`
    );
  });
});
