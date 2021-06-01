import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTabsComponent } from './detail-tabs.component';

describe('DetailTabsComponent', () => {
  let component: DetailTabsComponent;
  let fixture: ComponentFixture<DetailTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
