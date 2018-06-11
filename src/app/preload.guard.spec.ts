import { TestBed, async, inject } from '@angular/core/testing';

import { PreloadGuard } from './preload.guard';

describe('PreloadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreloadGuard]
    });
  });

  it('should ...', inject([PreloadGuard], (guard: PreloadGuard) => {
    expect(guard).toBeTruthy();
  }));
});
