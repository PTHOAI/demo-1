import { Component, OnInit } from '@angular/core';
import { CartServeService } from '../cart/cart-serve.service';
import { Book } from '../interface/book';

@Component({
  selector: 'app-detail-cart',
  templateUrl: './detail-cart.component.html',
  styleUrls: ['./detail-cart.component.scss']
})
export class DetailCartComponent implements OnInit {
  public listCart:Book [] = [];
  constructor(private cartService: CartServeService) { }

  ngOnInit(): void {
    this.listCart = this.cartService.cart;
  }

}
