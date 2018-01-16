import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLazyComponent } from './my-lazy.component';

describe('MyLazyComponent', () => {
  let component: MyLazyComponent;
  let fixture: ComponentFixture<MyLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
