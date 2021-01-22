import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService:AuthserviceService) { }

  ngOnInit(): void {
  }

}
