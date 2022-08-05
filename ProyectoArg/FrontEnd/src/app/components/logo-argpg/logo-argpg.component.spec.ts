import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoArgpgComponent } from './logo-argpg.component';

describe('LogoArgpgComponent', () => {
  let component: LogoArgpgComponent;
  let fixture: ComponentFixture<LogoArgpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoArgpgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoArgpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
