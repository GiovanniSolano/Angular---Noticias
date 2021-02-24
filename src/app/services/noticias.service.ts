import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {


  private URL_API = 'https://newsapi.org/v2/top-headlines?';

  private API_KEY = '900a3716026c4aeebe268078bcbbc907';

  

  constructor(private http: HttpClient) { }


  obtenerNoticias({categoria, pais}): Observable<any> {

    const URL = `${this.URL_API}country=${pais}&category=${categoria}&apiKey=${this.API_KEY}`;

    return this.http.get<any>(URL);

  }

}
