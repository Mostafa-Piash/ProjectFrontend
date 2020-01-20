import { TestBed } from '@angular/core/testing';

import { UserEmitService } from './user-emit.service';

describe('UserEmitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserEmitService = TestBed.get(UserEmitService);
    expect(service).toBeTruthy();
  });
});
