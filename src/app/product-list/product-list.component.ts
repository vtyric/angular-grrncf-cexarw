import {Component} from '@angular/core';
import { Product } from '../interafaces';

import { products} from '../products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    public products: Product[] = products;

    share(): void {
        window.alert('The product has been shared!');
    }

    onNotify(): void {
        window.alert('You will be notified when the product goes on sale');
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/