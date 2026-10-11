import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigator } from './side-navigator';

describe('SideNavigator', () => {
  let component: SideNavigator;
  let fixture: ComponentFixture<SideNavigator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavigator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavigator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
