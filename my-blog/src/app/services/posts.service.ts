import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ENDPOINT } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _httpClient: HttpClient) { }

  getAllPosts() {
    const url = ENDPOINT + '/posts';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this._httpClient.get(url, { headers: headers })
      .pipe(map( (resolve: any, reject) => {
        return resolve;
      }));
  }
}
