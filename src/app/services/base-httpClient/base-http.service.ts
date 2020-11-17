import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  constructor(private httpClient: HttpClient) { }
  get(url,queryParams = {}) {
    return this.httpClient.get(`${environment.base_url}/${url}`,queryParams);
  }

  post(url, body, queryParams = {}) {
    debugger
    return this.httpClient.post(`${environment.base_url}/${url}`, body, queryParams);
  }

  put(url, body, queryParams = {}) {
    return this.httpClient.put(`${environment.base_url}/${url}`, body, queryParams)
  }

  delete(url, queryParams = {}) {
    return this.httpClient.delete(`${environment.base_url}/${url}`,queryParams);
  }

}
