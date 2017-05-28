import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CartService {
    public items: any[] = [];
    cartChange: Observable<any>;
    cartChangeObserver: Observer<any>;
}