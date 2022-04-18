import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsRepoComponent } from './results-repo.component';

describe('ResultsRepoComponent', () => {
  let component: ResultsRepoComponent;
  let fixture: ComponentFixture<ResultsRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
