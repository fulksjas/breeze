/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockHttpClientService } from './mockHttpClient.service';

describe('Service: MockHttpClient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockHttpClientService]
    });
  });

  it('should ...', inject([MockHttpClientService], (service: MockHttpClientService) => {
    expect(service).toBeTruthy();
  }));
});
