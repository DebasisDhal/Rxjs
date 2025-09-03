import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Par4Component } from './par4.component';

describe('Par4Component', () => {
  let component: Par4Component;
  let fixture: ComponentFixture<Par4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Par4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Par4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
