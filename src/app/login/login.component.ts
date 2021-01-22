import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false
  constructor(private router: Router,
    private loginservice: AuthserviceService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  loginUser(){


  }

  // checkLogin() {
  //   if (this.loginservice.authenticate(this.username, this.password)
  //   ) {
  //     this.router.navigate([''])
  //     this.invalidLogin = false
  //   } else
  //     this.invalidLogin = true
  // }


  checkLogin(){
    if (this.validate()) {
      this.loginservice.authenticate(this.username,this.password).subscribe(
        res => {
          console.log(res);
          this.toastr.success('Login Successful!!');
          sessionStorage.setItem('username',res['response'].userId);
                this.router.navigate(['']);
                this.invalidLogin = false;
        },
        error => {
          // toastr.error(error['error'].status.message);
          this.invalidLogin = true;
          this.toastr.error('Login Failed');
        }
      );
    }
  }


  validate() {
    if (this.username.trim() === '' || this.password.trim() === '') {
      this.toastr.error('Mandatory fields cannot be empty');
      return false;
    }
    return true;
  }

}
