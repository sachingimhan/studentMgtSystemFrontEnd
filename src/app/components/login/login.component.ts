import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { observable, throwError } from 'rxjs';
import { catchError, retry, take } from 'rxjs/operators';
import { Login } from 'src/app/model/login';
import { LoginServicesService } from 'src/app/services/login-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private LoginService: LoginServicesService,
    private Toaster: ToastrService,
    private AngulerRouter:Router
  ) { }

  teacherID = '';
  password = '';

  ngOnInit(): void {

  }

  public loginUser() {
    try {
      this.LoginService.requestLogin(this.teacherID, this.password).subscribe((data: Login) => {
        if (data.isSuccess) {
          localStorage.setItem('@token', data.data);
          this.Toaster.success(data.message, 'Success').onHidden.pipe
            (take(1)).subscribe(() => { 
              this.AngulerRouter.navigate(['/dashboard']);
             });
        }else{
          this.Toaster.error(data.message,'Error');
        }
      })
    } catch (error) {

    }
  }

}
