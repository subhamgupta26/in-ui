import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectideasComponent } from './projectideas.component';

describe('ProjectideasComponent', () => {
  let component: ProjectideasComponent;
  let fixture: ComponentFixture<ProjectideasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectideasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectideasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
