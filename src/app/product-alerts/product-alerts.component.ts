import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../interafaces';

@Component({
    selector: 'app-product-alerts',
    templateUrl: './product-alerts.component.html',
    styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
    @Input() public product!: Product;
    @Output() public notify: EventEmitter<void> = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

}
