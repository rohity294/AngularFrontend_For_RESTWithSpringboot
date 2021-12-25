import { TestBed } from '@angular/core/testing';

import { DashboardProcesorService } from './dashboard-procesor.service';

describe('DashboardProcesorService', () => {
  let service: DashboardProcesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardProcesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
