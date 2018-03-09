import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkouttransactionsComponent } from './workouttransactions.component';

describe('WorkouttransactionsComponent', () => {
  let component: WorkouttransactionsComponent;
  let fixture: ComponentFixture<WorkouttransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkouttransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkouttransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
