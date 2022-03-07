import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInformtionComponent } from './personal-informtion.component';

describe('PersonalInformtionComponent', () => {
  let component: PersonalInformtionComponent;
  let fixture: ComponentFixture<PersonalInformtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInformtionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInformtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
