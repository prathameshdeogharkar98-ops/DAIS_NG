import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  public get(url: string) {

    return this.http.get(url);

  }

  public postByBody(url: string, payload: any) {

    return this.http.post(url, payload, { responseType: 'json' });

  }
}
