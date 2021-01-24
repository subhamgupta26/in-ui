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
    var userId= sessionStorage.getItem('username');
    return this.http.get(`${this.baseUrl}/entities`,{headers: headers} );
  }

  submitIdea(title, desc) {
    const headers = new HttpHeaders();
    this.createHeader(headers);
    var userId= sessionStorage.getItem('username');
    var user = {
      userId:userId,
      desc: desc,
      title: title,
      entityType: 1,
      userDomainSkills: [
        1
      ],
      userTechSkills: [
        1
      ]    
    };
    return this.http.post(`${this.baseUrl}/entities`, user,{headers: headers} );
}

submitComment(commentText, id) {
  const headers = new HttpHeaders();
  this.createHeader(headers);
  var userId= sessionStorage.getItem('username');
  var operationFields = {
    userId:userId,
    commentText:commentText
  }
  var commentDetails =  {
    operation: "comment",
    operationFields: JSON.stringify(operationFields)
  };
  return this.http.put(`${this.baseUrl}/entities/entityId/${id}`, commentDetails, {headers: headers} );
}

liked(id) {
  const headers = new HttpHeaders();
  this.createHeader(headers);
  var userId= sessionStorage.getItem('username');
  var likeDetails =  {
    operation: "like",
    userId:userId,
  };
  return this.http.put(`${this.baseUrl}/entities/entityId/${id}`, likeDetails, {headers: headers} );
}

approved(id) {
  const headers = new HttpHeaders();
  this.createHeader(headers);
  var userId= sessionStorage.getItem('username');
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
  return this.http.put(`${this.baseUrl}/entities/entityId/${id}`, approveDetails, {headers: headers} );
}

applied(id) {
  const headers = new HttpHeaders();
  this.createHeader(headers);
  var userId= sessionStorage.getItem('username');
  var operationFields = {
    userId:userId,
  }
  var appliedDetails =  {
    operation: "apply",
    operationFields:JSON.stringify(operationFields),
  };
  return this.http.put(`${this.baseUrl}/entities/entityId/${id}`, appliedDetails, {headers: headers} );
}

}
