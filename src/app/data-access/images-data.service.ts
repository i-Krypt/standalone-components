import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ImagesDataService {
  url = `${environment.baseUrl}`;

  constructor(private http: HttpClient) {}

  getImages(): Observable<any> {
    return this.http.get(this.url + 'photos').pipe(
      map((response) => console.log('findHttp', response)
      ),
      catchError((e: any) => {
        throw new Error(e);
      })
    );
  }
}
