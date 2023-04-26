import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTextAreaComponent } from './simple-text-area.component';

describe('SimpleTextAreaComponent', () => {
  let component: SimpleTextAreaComponent;
  let fixture: ComponentFixture<SimpleTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleTextAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
