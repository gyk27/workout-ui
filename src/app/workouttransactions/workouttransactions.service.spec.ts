import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { WorkouttransactionsService } from './workouttransactions.service';

describe('WorkouttransactionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkouttransactionsService,{provide: Http, deps: [MockBackend]}]
    });
  });

  it('should be created', inject([WorkouttransactionsService], (service: WorkouttransactionsService) => {
    expect(service).toBeTruthy();
  }));
});
