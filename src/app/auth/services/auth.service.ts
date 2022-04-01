import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private httpClient: HttpClient) { }

public login(email: string, password: string) {
  return new Observable((observer) => {
    const requestBody = {
      email: email,
      password: password,
    };
    // debugger;
    this.httpClient.post('http://127.0.0.1:8000/api/login', requestBody)
      .subscribe((res) => {
        console.log(res)
        // observer.next(res);
      // },
        // (err) => {
        //   observer.error(err);
        });
  });
}
}
