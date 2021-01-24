import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../service/profile.service';
import { idea} from '../model/idea';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


// export interface DialogData {
//   text: string;
// }
@Component({
  selector: 'app-profilesa',
  templateUrl: './profilesa.component.html',
  styleUrls: ['./profilesa.component.css']
})
export class ProfilesaComponent implements OnInit {

  // text :string;
  constructor(private router: Router,
    private profileservice: ProfileService, private toastr: ToastrService) { //public dialog: MatDialog
    this.getCurrentUser();
    this.getAllIdeas();
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '750px',
  //     data: { text: this.text }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.text = result;
  //   });
  // }



  profile = {
    'userId': '',
    'fullName': '',
    'teamName': '',
    'email': '',
    'userProfileSummary': '',
    'userTechSkills': '',
    'userDomainSkills': '',
    'rewardPoints': '',
    'badgeType': ''
  }
  

  ideas: idea[];
  ngOnInit(): void {
  }


  getCurrentUser() {
    // this.profile = {
    //   'userId': '12342',
    //   'fullName': 'Priyanka Singh',
    //   'teamName': 'Hacktober',
    //   'email': 'ppriya@gmail.com',
    //   'userProfileSummary': 'userProfileSummary',
    //   'userTechSkills': 'Angular',
    //   'userDomainSkills': 'JS TS',
    //   'rewardPoints': '500',
    //   'badgeType': 'Diamond'
    // }
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

  getAllIdeas() {

    // this.ideas = [{
    //   "_id": '9abc',
    //   "userId": "m0j04br",
    //   "title": "Vendor Live Rating Project",
    //   "desc": "ML project to get rating realtime based on the previous data and recommendation engine",
    //   "entitytype":1,
    //   "userDomainSkills": [
    //     1,
    //     2,
    //     3
    //   ],
    //   "userTechSkills": [
    //     1,
    //     2,
    //     3
    //   ],
    //   "likes": [],
    //   "commentList": [],
    //   "entityCreatedTime": '1610709400',
    //   "projectStatus": "ongoing",
    //   "rewardPointsPerPerson": '230',
    //   "projectStartDate": '1610709400',
    //   "projectEndDate": '1610709400',
    //   "appliedMemberCount": '4',
    //   "selectedMemberCount": '0',
    //   "reqMemberCount": '0',
    //   "likesCount": '0'
    // }];

    // this.ideas = [{
    //   "_id": '9abc',
    //   "userId": "m0j04br",
    //   "title": "Vendor Live Rating Project",
    //   "desc": "ML project to get rating realtime based on the previous data and recommendation engine",
    //   "userDomainSkills": [
    //     1,
    //     2,
    //     3
    //   ],
    //   "userTechSkills": [
    //     1,
    //     2,
    //     3
    //   ],
    //   "likes": [],
    //   "commentList": [],
    //   "entityCreatedTime": '1610709400',
    //   "projectStatus": "ongoing",
    //   "rewardPointsPerPerson": '230',
    //   "projectStartDate": '1610709400',
    //   "projectEndDate": '1610709400',
    //   "appliedMemberCount": '4',
    //   "selectedMemberCount": '0',
    //   "reqMemberCount": '0',
    //   "likesCount": '0'
    // }];

      this.profileservice.getAllIdeas().subscribe(
        res =>{
          console.log(res);
            this.ideas=res['response'];
        },
        error => {
          this.toastr.error('get User Failed');
        }
      );
  }

}

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }
