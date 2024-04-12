import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExercisesPageComponent } from './my-exercises-page.component';

describe('MyExercisesPageComponent', () => {
  let component: MyExercisesPageComponent;
  let fixture: ComponentFixture<MyExercisesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyExercisesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyExercisesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
