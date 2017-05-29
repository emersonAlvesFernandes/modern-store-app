import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})

export class SubMenuComponent implements OnInit {
  
  public totalItem: number = 0;

  constructor(private cartService: CartService) { 

    this.cartService.cartChange.subscribe((data) => {      
      this.totalItem = data.length;
    });
  }

  ngOnInit() {
  }
  

}
