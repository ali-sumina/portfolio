import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicProjsComponent } from './graphic-projs.component';

describe('GraphicProjsComponent', () => {
  let component: GraphicProjsComponent;
  let fixture: ComponentFixture<GraphicProjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicProjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicProjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
