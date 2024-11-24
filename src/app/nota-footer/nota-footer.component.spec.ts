import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaFooterComponent } from './nota-footer.component';

describe('NotaFooterComponent', () => {
  let component: NotaFooterComponent;
  let fixture: ComponentFixture<NotaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotaFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
