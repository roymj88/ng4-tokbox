import { TestBed, inject } from '@angular/core/testing';

import { VideoCallManagerService } from './video-call-manager.service';

describe('VideoCallManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoCallManagerService]
    });
  });

  it('should be created', inject([VideoCallManagerService], (service: VideoCallManagerService) => {
    expect(service).toBeTruthy();
  }));
});
