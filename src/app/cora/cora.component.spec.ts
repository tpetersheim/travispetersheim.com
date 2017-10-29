import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoraComponent } from './cora.component';

describe('CoraComponent', () => {
  let component: CoraComponent;
  let fixture: ComponentFixture<CoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
