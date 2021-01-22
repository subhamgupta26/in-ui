import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authentocationService: AuthserviceService,
    private router: Router) { }


  ngOnInit() {
    this.authentocationService.logOut();
    this.router.navigate(['/login']);
  }
}
