import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private apiService: ApiService) {

  }

  public login(userName: string, password: string) {
    let payload = {
      userName: userName,
      password: password
    }
    this.apiService.postByBody("https://localhost:5000/api/login/auth", payload).subscribe(res => {
      console.log("login ===>> ", res);

    })
  }
}
