import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthData } from '../models/authData.model';

interface AuthResponse{
  uid: string;
  email: string;
  name: string;
  type: string;
  token: string;
  expiresIn: number;
}

@Injectable({providedIn: 'root'})

export class LoginService{

  loggedUser = new BehaviorSubject<AuthData>(null);

  userProfile = new Subject<string>();

  private timer: any;

  constructor(private http: HttpClient, private router: Router){}

  // getImagePath(id: string){
  //   let image: string;
  //   this.http.get<{message: string, data: string}>('http://localhost:3000/api/v1/users/image/' + id)
  //   .subscribe(
  //     res => {
  //       image = res.data;
  //       console.log('in service' + image);
  //       this.userProfile.next(image);
  //     }
  //   );
  // }

  login(email: string, password: string){
    this.http.post<AuthResponse>('http://localhost:3000/api/v1/users/login', {email , password })
    .subscribe(tokenRes => {
      // const parsed = JSON.parse(tokenRes.message)
      console.log(tokenRes);
      this.handleAuthentication(tokenRes.uid, tokenRes.email, tokenRes.name, tokenRes.type, tokenRes.token, tokenRes.expiresIn);
    }, err => {
      console.log(err);
    });
  }

  private handleAuthentication(
    localId: string,
    email: string,
    name: string,
    type: string,
    tokenId: string,
    expiresIn: number){
      const expDate = new Date(new Date().getTime() + expiresIn * 1000);
      const authData = new AuthData(
        localId,
        email,
        name,
        type,
        tokenId,
        expDate
      );
      this.loggedUser.next(authData);
      localStorage.setItem('userData', JSON.stringify(authData));
      if (type === 'webAdmin'){
        this.router.navigate(['/web-admin']);
      }else if (type === 'collegeAdmin'){
        this.router.navigate(['/college-admin']);
      }else if (type === 'student'){
        this.router.navigate(['/students']);
      }
      this.autoLogOut(expiresIn * 1000);
    }

    logOut(){
      this.loggedUser.next(null);
      this.router.navigate(['/home']);
      localStorage.removeItem('userData');
      if (this.timer){
        clearTimeout(this.timer);
      }
      this.timer = null;
    }

    autoLogin(){
      const userData: {
        uid: string,
        email: string,
        name: string,
        type: string,
        _tokenId: string,
        expDate: Date
      } = JSON.parse(localStorage.getItem('userData'));
      if (!userData){
        return;
      }
      const loadedUser = new AuthData(
        userData.uid,
        userData.email,
        userData.name,
        userData.type,
        userData._tokenId,
        userData.expDate
      );
      if (loadedUser.token){
        this.loggedUser.next(loadedUser);
        const expDuration = new Date(userData.expDate).getTime() - new Date().getTime();
        this.autoLogOut(expDuration);
        if (loadedUser.type === 'webAdmin'){
          this.router.navigate(['/web-admin']);
        }else if (loadedUser.type === 'collegeAdmin'){
          this.router.navigate(['/college-admin']);
        }else if (loadedUser.type === 'student'){
          this.router.navigate(['/students']);
        }
      }
    }

    autoLogOut(expDuration: number){
      this.timer = setTimeout(() => {
        this.logOut();
      }, expDuration);
    }

}
