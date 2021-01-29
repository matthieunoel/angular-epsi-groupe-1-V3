import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagAdminService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<any> {
    return this.httpClient.get(
      `${environment.api}/api/admin/tags`
    );
  }

  delete(id: number): Observable<any> {

    // return new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next(`Delete ID(${​​​​​id​}).`);
    //     observer.complete();
    //   }, 500);
    // });

    // console.log('URL :', `${environment.api}/api/admin/tag/${​​​​​id.toString()}​​​​​`);

    return this.httpClient.delete(
      `${environment.api}/api/admin/tag/${id}`
    );

  }

}





