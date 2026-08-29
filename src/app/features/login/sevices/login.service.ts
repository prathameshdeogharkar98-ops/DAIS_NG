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
    this.apiService.postByBody(CommonUrls.BASE_URL+CommonUrls.loginUrl, payload).subscribe(res => {
      console.log("login ===>> ", res);
      this.toastrService.toastScuccess(CommonMsgs.login_success,"Login Status");
    })
  }
}
