import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaslistComponent } from './ideaslist.component';

describe('IdeaslistComponent', () => {
  let component: IdeaslistComponent;
  let fixture: ComponentFixture<IdeaslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
