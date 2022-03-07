import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbContentComponent } from './ib-content.component';

describe('IbContentComponent', () => {
  let component: IbContentComponent;
  let fixture: ComponentFixture<IbContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IbContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
