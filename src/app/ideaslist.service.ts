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

submitComment(commentText) {
  const headers = new HttpHeaders();
  this.createHeader(headers);
  var userId= 'm0j04br'; //sessionStorage.getItem('username');
  var operationFields = {
    userId:userId,
    commentText:commentText
  }
  var commentDetails =  {
    operation: "comment",
    operationFields: JSON.stringify(operationFields)
  };
  return this.http.post(`${this.baseUrl}/entities`, commentDetails, {headers: headers} );
}

liked() {
  const headers = new HttpHeaders();
  this.createHeader(headers);
  var userId= 'm0j04br'; //sessionStorage.getItem('username');
  var likeDetails =  {
    operation: "like",
    userId:userId,
  };
  return this.http.post(`${this.baseUrl}/entities`, likeDetails, {headers: headers} );
}

approved() {
  const headers = new HttpHeaders();
  this.createHeader(headers);
  var userId= 'm0j04br'; //sessionStorage.getItem('username');
  var operationFields = {
    reqMemberCount:3,     //from where to get these details?
    rewardPointsPerPerson:230,
    projectStartDate:1610709400,
    projectEndDate:1610709400,
  }
  var approveDetails =  {
    operation: "approved",
    operationFields:JSON.stringify(operationFields),
  };
  return this.http.post(`${this.baseUrl}/entities`, approveDetails, {headers: headers} );
}

applied() {
  const headers = new HttpHeaders();
  this.createHeader(headers);
  var userId= 'm0j04br'; //sessionStorage.getItem('username');
  var operationFields = {
    userId:userId,
  }
  var appliedDetails =  {
    operation: "apply",
    operationFields:JSON.stringify(operationFields),
  };
  return this.http.post(`${this.baseUrl}/entities`, appliedDetails, {headers: headers} );
}

}
