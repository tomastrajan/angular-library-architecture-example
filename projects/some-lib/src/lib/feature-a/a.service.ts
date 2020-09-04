import { Injectable } from '@angular/core';

import { BService } from '@my-org/some-lib/src/lib/feature-b';

@Injectable({
  providedIn: 'root',
})
export class AService {
  constructor(private b: BService) {}
}
