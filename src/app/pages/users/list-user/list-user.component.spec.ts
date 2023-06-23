import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { of, throwError } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { ListUserComponent } from './list-user.component';

describe('ListUserComponent', () => {
  let component: ListUserComponent;
  let fixture: ComponentFixture<ListUserComponent>;
  let userService: UserService;
  let messageService: NzMessageService;

  const mockData: User[] = [
    {
      id: 4572,
      uid: 'fefd0ca4-96b9-4b4d-bbf0-ac7579147cc7',
      password: 'K5Di1boVpX',
      first_name: 'Larry',
      last_name: 'Labadie',
      username: 'larry.labadie',
      email: 'larry.labadie@email.com',
      avatar:
        'https://robohash.org/earummagnammaxime.png?size=300x300&set=set1',
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
    },
    {
      id: 5970,
      uid: 'f856ddc5-8ceb-4c48-900c-6949dc8b926a',
      password: 'n6V2wcTHKv',
      first_name: 'Mirtha',
      last_name: 'Bednar',
      username: 'mirtha.bednar',
      email: 'mirtha.bednar@email.com',
      avatar: 'https://robohash.org/atquecommodisit.png?size=300x300&set=set1',
      gender: 'Polygender',
      phone_number: '+41 504.275.2828 x6846',
      social_insurance_number: '785990904',
      date_of_birth: '1971-08-20',
      employment: {
        title: 'Future Manager',
        key_skill: 'Networking skills',
      },
      address: {
        city: 'Cinthiamouth',
        street_name: 'Stracke Ville',
        street_address: '39078 Bula Trail',
        zip_code: '18820-5639',
        state: 'Vermont',
        country: 'United States',
        coordinates: {
          lat: -54.27654510856954,
          lng: -105.19248450027563,
        },
      },
      credit_card: {
        cc_number: '6771-8952-6835-5317',
      },
      subscription: {
        plan: 'Basic',
        status: 'Active',
        payment_method: 'Debit card',
        term: 'Annual',
      },
    },
    {
      id: 6270,
      uid: '7061d69c-a57c-46e1-9d1f-612c2b7b8ebf',
      password: 'e1RXi7TbYf',
      first_name: 'Latrisha',
      last_name: 'Anderson',
      username: 'latrisha.anderson',
      email: 'latrisha.anderson@email.com',
      avatar:
        'https://robohash.org/itaquedolorconsequatur.png?size=300x300&set=set1',
      gender: 'Female',
      phone_number: '+370 322-185-9607 x4125',
      social_insurance_number: '465464584',
      date_of_birth: '2001-06-01',
      employment: {
        title: 'International Marketing Technician',
        key_skill: 'Proactive',
      },
      address: {
        city: 'West Cornelius',
        street_name: 'Ricky Corner',
        street_address: '3673 Dottie Road',
        zip_code: '85681',
        state: 'Minnesota',
        country: 'United States',
        coordinates: {
          lat: 17.190281465088177,
          lng: -165.31486751779224,
        },
      },
      credit_card: {
        cc_number: '6771-8952-1284-1917',
      },
      subscription: {
        plan: 'Silver',
        status: 'Idle',
        payment_method: 'WeChat Pay',
        term: 'Annual',
      },
    },
    {
      id: 8148,
      uid: 'e3792cae-c550-48cb-b453-8eae4e903801',
      password: 'n5YV8WLtXw',
      first_name: 'Miquel',
      last_name: 'Gulgowski',
      username: 'miquel.gulgowski',
      email: 'miquel.gulgowski@email.com',
      avatar:
        'https://robohash.org/ipsumsuscipitveritatis.png?size=300x300&set=set1',
      gender: 'Genderqueer',
      phone_number: '+262 (862) 864-2708',
      social_insurance_number: '959842410',
      date_of_birth: '1988-04-14',
      employment: {
        title: 'Education Developer',
        key_skill: 'Fast learner',
      },
      address: {
        city: 'Fredericton',
        street_name: 'Cummerata Estates',
        street_address: '980 Brant Shore',
        zip_code: '22296-5680',
        state: 'Illinois',
        country: 'United States',
        coordinates: {
          lat: -45.1142471022675,
          lng: 176.51117376059887,
        },
      },
      credit_card: {
        cc_number: '4625039442421',
      },
      subscription: {
        plan: 'Basic',
        status: 'Active',
        payment_method: 'Bitcoins',
        term: 'Annual',
      },
    },
    {
      id: 6153,
      uid: 'b1397170-c459-4d9d-b599-d3b9281cd581',
      password: 'qgJ0dO8nVU',
      first_name: 'Ignacio',
      last_name: 'Sauer',
      username: 'ignacio.sauer',
      email: 'ignacio.sauer@email.com',
      avatar: 'https://robohash.org/autemullamcum.png?size=300x300&set=set1',
      gender: 'Genderqueer',
      phone_number: '+676 1-766-391-7648 x0463',
      social_insurance_number: '531236867',
      date_of_birth: '1963-06-07',
      employment: {
        title: 'Internal Construction Officer',
        key_skill: 'Confidence',
      },
      address: {
        city: 'New Hazel',
        street_name: 'Huels Falls',
        street_address: '8042 Donald Port',
        zip_code: '36621-2339',
        state: 'Tennessee',
        country: 'United States',
        coordinates: {
          lat: 13.583672659189801,
          lng: 87.47800813762598,
        },
      },
      credit_card: {
        cc_number: '5395-0930-8485-6738',
      },
      subscription: {
        plan: 'Premium',
        status: 'Idle',
        payment_method: 'WeChat Pay',
        term: 'Payment in advance',
      },
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListUserComponent],
      providers: [UserService, NzMessageService],
      imports: [HttpClientTestingModule, NzSpaceModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    messageService = TestBed.inject(NzMessageService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('cancel', () => {
    it('should display info message when called', () => {
      spyOn(messageService, 'info');
      component.cancel();
      expect(messageService.info).toHaveBeenCalledWith('delete canceled');
    });
  });

  describe('confirm', () => {
    it('should call deleteItem with the provided userId', () => {
      const userId = 1;
      spyOn(component, 'deleteItem');
      component.confirm(userId);
      expect(component.deleteItem).toHaveBeenCalledWith(userId);
    });
  });

  describe('beforeConfirm', () => {
    it('should return an Observable that emits true after a delay', done => {
      component.beforeConfirm().subscribe(result => {
        expect(result).toBeTrue();
        done();
      });
    });
  });

  describe('fetchData', () => {
    it('should fetch data from the userService and assign it to the component', () => {
      const mockUsers: User[] = mockData;
      spyOn(userService, 'fetchAll').and.returnValue(of(mockUsers));
      component.fetchData();
      expect(userService.fetchAll).toHaveBeenCalled();
      expect(component.data).toEqual(mockUsers);
      expect(component.isLoading).toBeFalse();
    });

    it('should handle error when fetching data', () => {
      const errorMessage = 'Error occurred while fetching data';
      spyOn(userService, 'fetchAll').and.returnValue(
        throwError(new Error(errorMessage))
      );
      spyOn(messageService, 'error');
      component.fetchData();
      expect(userService.fetchAll).toHaveBeenCalled();
      expect(component.data).toBeUndefined();
      expect(component.isLoading).toBeFalse();
      expect(userService.fetchAll).toHaveBeenCalled();
      expect(messageService.error).toHaveBeenCalledWith(
        `An error occurred while fetching the data (${errorMessage})`
      );
    });
  });

  describe('addUser', () => {
    it('should add a user and fetch data from the userService', () => {
      const mockUser: User = mockData[0];
      spyOn(userService, 'addUser').and.returnValue(of([mockUser]));
      spyOn(component, 'fetchData');
      component.addUser();
      expect(userService.addUser).toHaveBeenCalled();
      expect(component.fetchData).toHaveBeenCalled();
      expect(component.isLoading).toBeFalse();
    });

    it('should handle error when adding a user', () => {
      const errorMessage = 'Error occurred while adding the item';
      spyOn(userService, 'addUser').and.returnValue(
        throwError(new Error(errorMessage))
      );
      spyOn(messageService, 'error');
      component.addUser();
      expect(userService.addUser).toHaveBeenCalled();
      expect(component.isLoading).toBeFalse();
      expect(messageService.error).toHaveBeenCalledWith(
        `An error occurred while adding the item (${errorMessage})`
      );
    });
  });

  describe('deleteItem', () => {
    it('should delete the item and display success message when confirmed', () => {
      const itemId = 1;
      spyOn(component, 'beforeConfirm').and.returnValue(of(true));
      spyOn(userService, 'deleteDataById').and.returnValue(of([]));
      spyOn(component, 'ngOnInit');
      spyOn(messageService, 'info');
      component.deleteItem(itemId);
      expect(component.beforeConfirm).toHaveBeenCalled();
      expect(userService.deleteDataById).toHaveBeenCalledWith(itemId);
      expect(component.ngOnInit).toHaveBeenCalled();
      expect(messageService.info).toHaveBeenCalledWith(
        'Item deleted successfully'
      );
      expect(component.isLoading).toBeFalse();
    });

    it('should handle cancellation when confirmation is not provided', () => {
      spyOn(component, 'beforeConfirm').and.returnValue(of(false));
      spyOn(userService, 'deleteDataById');
      spyOn(component, 'ngOnInit');
      component.deleteItem(1);
      expect(component.beforeConfirm).toHaveBeenCalled();
      expect(userService.deleteDataById).not.toHaveBeenCalled();
      expect(component.ngOnInit).not.toHaveBeenCalled();
      expect(component.isLoading).toBeFalse();
    });

    it('should handle error when deleting the item', () => {
      const errorMessage = 'Error occurred while deleting the item';
      spyOn(component, 'beforeConfirm').and.returnValue(of(true));
      spyOn(userService, 'deleteDataById').and.returnValue(
        throwError(new Error(errorMessage))
      );
      spyOn(component, 'ngOnInit');
      spyOn(messageService, 'error');
      component.deleteItem(1);
      expect(component.beforeConfirm).toHaveBeenCalled();
      expect(userService.deleteDataById).toHaveBeenCalled();
      expect(component.ngOnInit).not.toHaveBeenCalled();
      expect(messageService.error).toHaveBeenCalledWith(
        `An error occurred while deleting the item (${errorMessage})`
      );
      expect(component.isLoading).toBeFalse();
    });
  });

  describe('ngOnInit', () => {
    it('should call fetchData when component is initialized', () => {
      spyOn(component, 'fetchData');
      component.ngOnInit();
      expect(component.fetchData).toHaveBeenCalled();
    });
  });
});
