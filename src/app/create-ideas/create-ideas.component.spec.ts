import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIdeasComponent } from './create-ideas.component';

describe('CreateIdeasComponent', () => {
  let component: CreateIdeasComponent;
  let fixture: ComponentFixture<CreateIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
