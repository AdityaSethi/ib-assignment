import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbHeaderComponent } from './ib-header.component';

describe('IbHeaderComponent', () => {
  let component: IbHeaderComponent;
  let fixture: ComponentFixture<IbHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IbHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
