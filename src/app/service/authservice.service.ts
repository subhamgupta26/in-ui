import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  baseUrl= 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  createHeader(headers: HttpHeaders) {
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept-Language', 'en' );
    return headers;
  }

  authenticate(username, password) {
      const headers = new HttpHeaders();
      this.createHeader(headers);
      var user = {
        userId:username,
        password: password
      };
      return this.http.post(`${this.baseUrl}/login/authenticate`, user,{headers: headers} );

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('roleId');
  }

}
