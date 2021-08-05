import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestrezasComponent } from './destrezas.component';

describe('DestrezasComponent', () => {
  let component: DestrezasComponent;
  let fixture: ComponentFixture<DestrezasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestrezasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestrezasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
