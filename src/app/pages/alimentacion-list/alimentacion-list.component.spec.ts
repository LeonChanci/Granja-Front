import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentacionListComponent } from './alimentacion-list.component';

describe('AlimentacionListComponent', () => {
  let component: AlimentacionListComponent;
  let fixture: ComponentFixture<AlimentacionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentacionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
