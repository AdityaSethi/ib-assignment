import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInformtionComponent } from './profile-informtion.component';

describe('ProfileInformtionComponent', () => {
  let component: ProfileInformtionComponent;
  let fixture: ComponentFixture<ProfileInformtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInformtionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInformtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
