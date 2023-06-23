import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  UserOutline,
  PicLeftOutline,
} from '@ant-design/icons-angular/icons';

import { AppComponent } from './app.component';

const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline,
  UserOutline,
  PicLeftOutline,
];

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        NzLayoutModule,
        NzMenuModule,
        NzIconModule.forRoot(icons),
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the logo and title', () => {
    const logo = fixture.nativeElement.querySelector('.sidebar-logo');
    expect(logo).toBeTruthy();

    const title = fixture.nativeElement.querySelector('.sidebar-logo h1');
    expect(title).toBeTruthy();
    expect(title.textContent).toContain(component.title);
  });

  it(`should have as title 'Final Project App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Final Project App');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Final Project App'
    );
  });

  it('should toggle the sidebar collapse state', () => {
    const trigger = fixture.nativeElement.querySelector('.header-trigger');
    expect(component.isCollapsed).toBe(false);

    trigger.click();
    fixture.detectChanges();
    expect(component.isCollapsed).toBe(true);

    trigger.click();
    fixture.detectChanges();
    expect(component.isCollapsed).toBe(false);
  });
});
