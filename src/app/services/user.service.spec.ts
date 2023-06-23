import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { of } from 'rxjs';
import { UserService } from './user.service';
import { User } from '../interfaces/user';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

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
      gender: 'Female',
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data from local storage if available', () => {
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockData));

    service.fetchAll().subscribe(result => {
      expect(result).toEqual(mockData);
    });

    expect(localStorage.getItem).toHaveBeenCalledWith(service.localStorageKey);
    httpMock.verify();
  });

  it('should fetch data from API and store it in local storage if not available', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    spyOn(localStorage, 'setItem');

    service.fetchAll().subscribe(result => {
      expect(result).toEqual(mockData);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        service.localStorageKey,
        JSON.stringify(mockData)
      );
    });

    const request = httpMock.expectOne(`${service.url}size=5`);
    expect(request.request.method).toBe('GET');
    request.flush(mockData);

    httpMock.verify();
  });

  it('should fetch a single user', () => {
    const mockUser: User = mockData[0];

    service.fetchOne().subscribe((user: User) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${service.url}size=1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });

  it('should return a user with the given id', () => {
    const dummyId = 4572;
    const dummyUser = mockData.find(user => user.id === dummyId);

    service.fetchAll().subscribe(users => {
      expect(users).toEqual(mockData);

      service.get(dummyId).subscribe(user => {
        expect(user).toEqual(dummyUser as User);
      });
    });

    const fetchAllRequest = httpMock.expectOne(`${service.url}size=5`);
    expect(fetchAllRequest.request.method).toBe('GET');
    fetchAllRequest.flush(mockData);
  });

  it('should return an error if the user with the given id is not found', () => {
    const dummyId = 4;

    spyOn(service, 'fetchAll').and.returnValue(of(mockData));

    service.fetchAll().subscribe(users => {
      expect(users).toEqual(mockData);

      service.get(dummyId).subscribe(
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => {},
        error => {
          expect(error.message).toBe('Data not found');
        }
      );
    });
  });

  it('should add a user', fakeAsync(() => {
    const fetchOneResponse = { id: 1, name: 'John Doe', gender: 'male' };
    const fetchAllResponse = [{ id: 2, name: 'Jane Smith', gender: 'female' }];

    spyOn(localStorage, 'setItem');

    service.addUser().subscribe(data => {
      expect(localStorage.setItem).toHaveBeenCalledWith(
        service.localStorageKey,
        JSON.stringify(data)
      );
    });

    const fetchOneRequest = httpMock.expectOne(`${service.url}size=1`);
    expect(fetchOneRequest.request.method).toBe('GET');
    fetchOneRequest.flush(fetchOneResponse);

    tick();

    const fetchAllRequest = httpMock.expectOne(`${service.url}size=5`);
    expect(fetchAllRequest.request.method).toBe('GET');
    fetchAllRequest.flush(fetchAllResponse);

    tick();
  }));

  it('should handle error and return data when fetching fails', fakeAsync(() => {
    const fetchOneResponse = mockData[0];
    const fetchAllResponse = mockData;

    spyOn(localStorage, 'setItem');
    spyOn(console, 'error');

    service.addUser().subscribe(data => {
      expect(data).toEqual(fetchAllResponse);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        service.localStorageKey,
        JSON.stringify(fetchAllResponse)
      );
      expect(console.error).toHaveBeenCalledWith(
        'Error fetching data:',
        jasmine.anything()
      );
    });

    const fetchOneRequest = httpMock.expectOne(`${service.url}size=1`);
    expect(fetchOneRequest.request.method).toBe('GET');
    fetchOneRequest.flush(fetchOneResponse);

    tick();

    const fetchAllRequest = httpMock.expectOne(`${service.url}size=5`);
    expect(fetchAllRequest.request.method).toBe('GET');
    fetchAllRequest.error(
      new ErrorEvent('error', { error: new Error('Fetching error') })
    );

    httpMock.expectOne(`${service.url}size=5`).flush(fetchAllResponse);

    tick();
  }));

  it('should update user data by id', () => {
    const dummyUsers: User[] = mockData;
    const updatedUser: User = {
      ...mockData[0],
      first_name: 'John',
      last_name: 'Doe',
    };

    spyOn(service, 'fetchAll').and.returnValue(of(dummyUsers));

    service.updateDataById(4572, updatedUser).subscribe(result => {
      expect(result).toEqual(dummyUsers);
      expect(result[0].first_name).toBe('John');
      expect(result[0].last_name).toBe('Doe');
    });

    const storedData = localStorage.getItem(service.localStorageKey);
    expect(JSON.parse(storedData as string)).toEqual(dummyUsers);
  });

  it('should delete data by id', () => {
    const testData: User[] = [
      { ...mockData[0], id: 1, avatar: 'avatar1.jpg' },
      { ...mockData[1], id: 2, avatar: 'avatar2.jpg' },
      { ...mockData[2], id: 3, avatar: 'avatar3.jpg' },
    ];

    spyOn(service, 'fetchAll').and.returnValue(of(testData));

    const idToDelete = 2;
    service.deleteDataById(idToDelete).subscribe(updatedData => {
      expect(updatedData.length).toBe(testData.length - 1);
      expect(updatedData.find(user => user.id === idToDelete)).toBeFalsy();
    });

    const storedData = JSON.parse(
      localStorage.getItem(service.localStorageKey) as string
    );
    expect(storedData.length).toBe(testData.length - 1);
    expect(storedData.find((user: User) => user.id === idToDelete)).toBeFalsy();
  });
});
