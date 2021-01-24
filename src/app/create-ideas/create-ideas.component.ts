import { Component, OnInit } from '@angular/core';
import { IdeaslistService } from '../ideaslist.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ideas',
  templateUrl: './create-ideas.component.html',
  styleUrls: ['./create-ideas.component.css']
})
export class CreateIdeasComponent implements OnInit {

  ideaTitle = ''
  ideaDesc = ''

  constructor(private router: Router, private ideaslistService: IdeaslistService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  submit() {
    this.ideaslistService.submitIdea(this.ideaTitle,this.ideaDesc).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/idealist']);
        this.toastr.success('Submitted!!');
        
      },
      error => {
        this.toastr.error('Oops! Submission Failed');
      }
    );
  }

}
