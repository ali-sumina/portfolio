import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignProjsComponent } from './design-projs.component';

describe('DesignProjsComponent', () => {
  let component: DesignProjsComponent;
  let fixture: ComponentFixture<DesignProjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignProjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignProjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
