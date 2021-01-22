import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.scss']
})
export class ShowCaseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get(pge){
    this.router.navigate([pge]);
  }
}
