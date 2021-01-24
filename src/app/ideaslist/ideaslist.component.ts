import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IdeaslistService } from '../ideaslist.service';
import { idea } from '../model/idea';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  desc: string;
}


@Component({
  selector: 'app-ideaslist',
  templateUrl: './ideaslist.component.html',
  styleUrls: ['./ideaslist.component.css']
})
export class IdeaslistComponent implements OnInit {

  ideas: idea[];
  projects: idea[];

  title: string;
  desc: string;

  commentText : string;

  data: string = "I like this read-more component because it's very helpful. This tutorial so good. I will share it with others.";
  dataLength: boolean;
  constructor(private router: Router, private ideaslistService: IdeaslistService, private toastr: ToastrService, public dialog: MatDialog) { 
    this.isReadMore(this.data)
    this.getIdeasAndProject();
  }

  openDialog(): void {
    this.router.navigate(['/createIdeas']);
    // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //   height: '400px',
    //   width: '250px',
    //   data: {title: this.title, desc: this.desc}
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.desc = result;
    // });
  }

  ngOnInit(): void {
    
  }

  isReadMore(data:string) {
    // (data.length > 30) ? this.dataLength = false : this.dataLength = true;
    this.dataLength = !(data.length > 30)
  }

  submitIdea(data:string) {
    // (data.length > 30) ? this.dataLength = false : this.dataLength = true;
    this.dataLength = !(data.length > 30)
  }

  submitComment() {
    this.ideaslistService.submitComment(this.commentText).subscribe(    //how to know for which idea/project is this comment?
      res => {
        console.log(res);
      },
      error => {
        this.toastr.error('Oops! Comment Failed');
      }
    );
  }

  liked() {
    this.ideaslistService.liked().subscribe(    //how to know for which idea/project is this comment?
      res => {
        console.log(res);
      },
      error => {
        this.toastr.error('Oops! Like Failed');
      }
    );
  }

  approved() {
    this.ideaslistService.approved().subscribe(    //how to know for which idea/project is this comment?
      res => {
        console.log(res);
      },
      error => {
        this.toastr.error('Oops! Approve Failed');
      }
    );
  }

  applied() {
    this.ideaslistService.applied().subscribe(    //how to know for which idea/project is this comment?
      res => {
        console.log(res);
      },
      error => {
        this.toastr.error('Oops! Apply Failed');
      }
    );
  }

  getIdeasAndProject() {
    this.ideas = [{
      "_id": '9abc',
      "userId": "m0j04br",
      "title": "Vendor Live Rating Project",
      "desc": "ML project to get rating realtime based on the previous data and recommendation engine",
      "entitytype":1,
      "userDomainSkills": [
        1,
        2,
        3
      ],
      "userTechSkills": [
        1,
        2,
        3
      ],
      "likes": [],
      "commentList": [{
        "userId": "m0j04br",
        "commentText": "superb idea intersted !!"
      },
      {
        "userId": "s0g06c3",
        "commentText": "very good !!!!"
      }],
      "entityCreatedTime": '1610709400',
      "projectStatus": "ongoing",
      "rewardPointsPerPerson": '230',
      "projectStartDate": '1610709400',
      "projectEndDate": '1610709400',
      "appliedMemberCount": '4',
      "selectedMemberCount": '0',
      "reqMemberCount": '0',
      "likesCount": '0'
    }];
    this.projects = [{
      "_id": '9abc',
      "userId": "m0j04br",
      "title": "Vendor Live Rating Project",
      "desc": "ML project to get rating realtime based on the previous data and recommendation engine",
      "entitytype":2,
      "userDomainSkills": [
        1,
        2,
        3
      ],
      "userTechSkills": [
        1,
        2,
        3
      ],
      "likes": [],
      "commentList": [{
        "userId": "m0j04br",
        "commentText": "superb idea intersted !!"
      },
      {
        "userId": "s0g06c3",
        "commentText": "very good !!!!"
      }],
      "entityCreatedTime": '1610709400',
      "projectStatus": "ongoing",
      "rewardPointsPerPerson": '230',
      "projectStartDate": '1610709400',
      "projectEndDate": '1610709400',
      "appliedMemberCount": '4',
      "selectedMemberCount": '0',
      "reqMemberCount": '0',
      "likesCount": '0'
    }];
    // this.ideaslistService.getUserIdeas().subscribe(
    //   res =>{
    //     console.log(res);
    //       this.ideas=res['response'];
    //       this.ideas = this.ideas.filter(obj => obj['entitytype']===1);
    //       this.projects = this.ideas.filter(obj => obj['entitytype']===2);

    //       // this.ideas.map(x => (x.entityCreatedTime
    //       //   setUTCSeconds(x.entityCreatedTime));

    //   },
    //   error => {
    //     this.toastr.error('get User Failed');
    //   }
    // );
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.dialogRef.updatePosition({ top: '50px', left: '50px' });

    }

  onNoClick(): void {
    this.dialogRef.close();
    
  }

  foo(x){

  }

}
