import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdeaslistService {

  baseUrl= 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  createHeader(headers: HttpHeaders) {
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept-Language', 'en' );
    return headers;
  }

  getUserIdeas() {
    const headers = new HttpHeaders();
    this.createHeader(headers);
    var userId= 'm0j04br'; //sessionStorage.getItem('username');
    return this.http.get(`${this.baseUrl}/userinfo/user/${userId}/entity/`,{headers: headers} );
  }

  submitIdea(title, desc) {
    const headers = new HttpHeaders();
    this.createHeader(headers);
    var userId= 'm0j04br'; //sessionStorage.getItem('username');
    var user = {
      userId:userId,
      desc: desc,
      title: title,
      userDomainSkills: [
        1
      ],
      userTechSkills: [
        1
      ]    
    };
    return this.http.post(`${this.baseUrl}/entities`, user,{headers: headers} );
}

}
