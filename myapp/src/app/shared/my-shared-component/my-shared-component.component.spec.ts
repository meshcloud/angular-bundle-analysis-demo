import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySharedComponentComponent } from './my-shared-component.component';

describe('MySharedComponentComponent', () => {
  let component: MySharedComponentComponent;
  let fixture: ComponentFixture<MySharedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySharedComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySharedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
