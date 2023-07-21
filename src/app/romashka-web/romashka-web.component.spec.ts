import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomashkaWebComponent } from './romashka-web.component';

describe('RomashkaWebComponent', () => {
  let component: RomashkaWebComponent;
  let fixture: ComponentFixture<RomashkaWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomashkaWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomashkaWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
