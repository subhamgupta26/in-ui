import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl= 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  createHeader(headers: HttpHeaders) {
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept-Language', 'en' );
    return headers;
  }

  getLoggedInUser() {
      const headers = new HttpHeaders();
      this.createHeader(headers);
      var userId=sessionStorage.getItem('username');
      return this.http.get(`${this.baseUrl}/userinfo/user/${userId}`,{headers: headers} );

  }
}
