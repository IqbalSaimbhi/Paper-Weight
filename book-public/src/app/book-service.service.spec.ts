import { TestBed } from '@angular/core/testing';

import { BookDataService } from './book-service.service';

describe('BookServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookDataService = TestBed.get(BookDataService);
    expect(service).toBeTruthy();
  });
});
