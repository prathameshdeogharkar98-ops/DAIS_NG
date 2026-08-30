import { Injectable } from '@angular/core';

import { Toast, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {

  constructor(private toastr: ToastrService) {

  }

  public toastScuccess(msg: any, title: any) {
    this.toastr.success(msg, title);
  }

  public toastError(msg: any, title: any) {
    this.toastr.error(msg, title);
  }

}
