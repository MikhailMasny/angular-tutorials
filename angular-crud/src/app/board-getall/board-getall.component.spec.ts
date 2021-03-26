import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGetallComponent } from './board-getall.component';

describe('BoardGetallComponent', () => {
  let component: BoardGetallComponent;
  let fixture: ComponentFixture<BoardGetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardGetallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardGetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
