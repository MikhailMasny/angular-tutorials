import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPutComponent } from './board-put.component';

describe('BoardPutComponent', () => {
  let component: BoardPutComponent;
  let fixture: ComponentFixture<BoardPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardPutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
