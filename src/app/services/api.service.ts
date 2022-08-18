import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //necessario para ler url/integrar a api//
  //ionic g servcice services/api para gerar a pagina de api/ necessario para trabalhar com os dados//
  private url = 'https://api.hgbrasil.com/weather?woeid=457479';

  constructor(private http: HttpClient) { }

  buscarPrevisao(){
    //metodos para chamar os dados//
     return this.http.get(this.url);

  }
}
