import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { ToasterService } from '../../../core/services/toastr.service';
import { CommonUrls } from '../../../core/services/CommonUrls';
import { CommonMsgs } from '../../../core/services/CommonMsgs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private apiService: ApiService, private toastrService: ToasterService) {

  }

  public login(userName: string, password: string) {
    let payload = {
      userName: userName,
      password: password
    }
    this.apiService.postByBody(CommonUrls.BASE_URL + CommonUrls.loginUrl, payload).subscribe((res: any) => {
      console.log("login ===>> ", res);
      if (res["status"] == 1) {
        this.toastrService.toastScuccess(CommonMsgs.login_success, "Login Status");
        //Add UserInfo and Token to localstorage
        localStorage.setItem("userInfo",JSON.stringify(res["userInfo"]));
        localStorage.setItem("token",res["token"]);
        localStorage.setItem("refreshToken",res["refreshToken"]);
      }
      else{
        this.toastrService.toastError(res["message"], "Login Status");
      }
    })
  }
}
