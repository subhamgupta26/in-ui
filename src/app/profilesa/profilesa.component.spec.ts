import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesaComponent } from './profilesa.component';

describe('ProfilesaComponent', () => {
  let component: ProfilesaComponent;
  let fixture: ComponentFixture<ProfilesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
