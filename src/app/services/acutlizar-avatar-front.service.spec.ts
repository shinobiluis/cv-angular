import { TestBed } from '@angular/core/testing';

import { AcutlizarAvatarFrontService } from './acutlizar-avatar-front.service';

describe('AcutlizarAvatarFrontService', () => {
  let service: AcutlizarAvatarFrontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcutlizarAvatarFrontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
