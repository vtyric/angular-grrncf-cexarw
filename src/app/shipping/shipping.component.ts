import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {ShippingPrice} from "../interafaces";
import {Observable} from "rxjs";

@Component({
    selector: 'app-shipping',
    templateUrl: './shipping.component.html',
    styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

    public shippingCosts!: Observable<ShippingPrice[]>;

    constructor(private cartService: CartService) {
    }

    ngOnInit(): void {
        this.shippingCosts = this.cartService.getShippingPrices()
    }
}
