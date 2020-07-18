import { TestBed } from '@angular/core/testing';

import { ClientDetailResolverService } from './client-detail-resolver.service';

describe('ClientDetailResolverService', () => {
  let service: ClientDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
