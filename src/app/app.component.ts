import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';
import { debounceTime, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias';

  loading = false;

  noticias: any[] = [];

  constructor(private _noticiasService: NoticiasService){}

  buscarNoticias(parametros: any) {
    this.loading = true;
    this.noticias = [];
    this._noticiasService.obtenerNoticias(parametros)
    .pipe(delay(1500))
      .subscribe(resp => {
        this.noticias = resp['articles'];
        this.loading = false;
      }, error => {
        console.log(error);
        this.loading = false;
      });
    
    
  }

}
