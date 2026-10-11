import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { ToasterService } from '../../../core/services/toastr.service';
import { CommonUrls } from '../../../core/services/CommonUrls';
import { CommonMsgs } from '../../../core/services/CommonMsgs';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private apiService: ApiService, private toastrService: ToasterService) {

  }

  public async login(
    userName: string,
    password: string
  ): Promise<any> {

    const payload = {
      userName: userName,
      password: password
    };

    try {
      const res: any = await firstValueFrom(
        this.apiService.postByBody(
          CommonUrls.BASE_URL + CommonUrls.loginUrl,
          payload
        )
      );

      console.log('login ===>> ', res);

      if (res['status'] == 1) {
        this.toastrService.toastScuccess(
          CommonMsgs.login_success,
          'Login Status'
        );

        // Store user information and tokens
        localStorage.setItem('userInfo', JSON.stringify(res['userInfo']));
        localStorage.setItem('token', res['token']);
        localStorage.setItem('refreshToken', res['refreshToken']);

        return true;
      } else {
        this.toastrService.toastError(
          CommonMsgs.login_fail,
          'Login Status'
        );

        return false;
      }
    } catch (error) {
      console.error('Login error:', error);

      this.toastrService.toastError(
        CommonMsgs.login_fail,
        'Login Status'
      );

      throw error;
    }
  }
}
