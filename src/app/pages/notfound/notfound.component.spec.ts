import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NotfoundComponent } from './notfound.component';

describe('NotfoundComponent', () => {
  let component: NotfoundComponent;
  let fixture: ComponentFixture<NotfoundComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [NzResultModule],
      declarations: [NotfoundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
