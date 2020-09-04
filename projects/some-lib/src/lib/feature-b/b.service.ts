import { Injectable } from '@angular/core';

import { CService } from '@my-org/some-lib/src/lib/feature-c';

@Injectable({
  providedIn: 'root',
})
export class BService {
  constructor(private c: CService) {}
}
