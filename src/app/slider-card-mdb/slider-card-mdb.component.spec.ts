import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCardMdbComponent } from './slider-card-mdb.component';

describe('SliderCardMdbComponent', () => {
  let component: SliderCardMdbComponent;
  let fixture: ComponentFixture<SliderCardMdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCardMdbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCardMdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
