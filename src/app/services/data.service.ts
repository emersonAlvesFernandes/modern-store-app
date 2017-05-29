//obs: separar data services por escopo 

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService{
     
    private serviceUrl: string = 'http://localhost:54382/';

    constructor(private http: Http){
        
    }

    //data:any: tipo genérico, é possível tipá-lo
    createUser(data: any) { 
        return this.http
        .post(this.serviceUrl + 'v1/customers', data)
        .map((res: Response) => res.json()); //mapeamento do corpo do response;
    }

//As requisições no angular são asíncronas
// por isso, é preciso de um observable para 'observar' a aplicação e interseptar o retorno das chamadas

    // getCourses(){
    //     return this.http
    //     .get('https://abt-api.azurewebsites.net/api/courses')
    //     .map((res: Response) => res.json()); //mapeamento do corpo do response;
    // }



}