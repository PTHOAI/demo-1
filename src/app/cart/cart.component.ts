import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailCartComponent } from '../detail-cart/detail-cart.component';
import { CartServeService } from './cart-serve.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartServeService, private dialog: MatDialog ) { }

  ngOnInit(): void {
  }
  getCarts () {
    return this.cartService.getCart();
  }

  openDialog() {
    this.dialog.open(DetailCartComponent, {width: '25%', height:"70%"})
  }
}
