import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(public router: Router) { }
  canActivate() {
  
    if (localStorage.getItem('user_info')) {
        return true;
    }

    this.router.navigate(['./login']);
    return false;
  }
}
