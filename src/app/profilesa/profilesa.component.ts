import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-profilesa',
  templateUrl: './profilesa.component.html',
  styleUrls: ['./profilesa.component.css']
})
export class ProfilesaComponent implements OnInit {

  constructor(private router: Router,
    private profileservice: ProfileService,private toastr: ToastrService) { 
      this.getCurrentUser();
    }


    profile={
      'userId':'',
      'fullName':'',
      'teamName':'',
      'email':'',
      'userProfileSummary':'',
      'userTechSkills':'',
      'userDomainSkills':'',
      'rewardPoints':'',
      'badgeType':''
    }

  ngOnInit(): void {
  }


  getCurrentUser(){
    this.profileservice.getLoggedInUser().subscribe(
      res =>{
        console.log(res);
          this.profile=res['response'];
      },
      error => {
        this.toastr.error('get User Failed');
      }

    );
  }

}
