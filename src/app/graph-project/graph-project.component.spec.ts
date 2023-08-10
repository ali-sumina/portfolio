import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphProjectComponent } from './graph-project.component';

describe('GraphProjectComponent', () => {
  let component: GraphProjectComponent;
  let fixture: ComponentFixture<GraphProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
