import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public isLoading: boolean = false;
  constructor() { }


  public showLoading(): void {
    this.isLoading = true;
  }

  public hideLoading(): void {
    this.isLoading = false;
  }

  


}
