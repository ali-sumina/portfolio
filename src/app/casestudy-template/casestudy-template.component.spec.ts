import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudyTemplateComponent } from './casestudy-template.component';

describe('CasestudyTemplateComponent', () => {
  let component: CasestudyTemplateComponent;
  let fixture: ComponentFixture<CasestudyTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasestudyTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasestudyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
