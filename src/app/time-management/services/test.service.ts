import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../services/base-httpClient/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private baseHttp: BaseHttpService) { }
  
  getPosts() {
    return this.baseHttp.get('url2', {});
  }
  postPosts(body){
    return this.baseHttp.post('posts',body,{});
  }
}
