import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGetComponent } from './board-get.component';

describe('BoardGetComponent', () => {
  let component: BoardGetComponent;
  let fixture: ComponentFixture<BoardGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
