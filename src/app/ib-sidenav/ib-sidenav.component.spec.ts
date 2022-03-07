import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbSidenavComponent } from './ib-sidenav.component';

describe('IbSidenavComponent', () => {
  let component: IbSidenavComponent;
  let fixture: ComponentFixture<IbSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IbSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
