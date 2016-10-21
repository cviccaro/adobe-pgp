import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CacheService } from '../cache/cache.service';

@Injectable()
export class ListsGuard implements CanActivate {
  constructor(private cache: CacheService, private router: Router) { }

  canActivate() {
    let bool = this.cache.has('lists') && this.cache.has('files');

    if ( !bool ) this.router.navigate(['/bulk']);

    return bool;
  }
}
