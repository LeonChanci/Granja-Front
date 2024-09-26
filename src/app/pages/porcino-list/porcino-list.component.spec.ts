import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcinoListComponent } from './porcino-list.component';

describe('PorcinoListComponent', () => {
  let component: PorcinoListComponent;
  let fixture: ComponentFixture<PorcinoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorcinoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorcinoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
