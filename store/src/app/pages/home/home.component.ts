import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { CartService } from "src/services/cart.service";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  cols: any = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  categoria: string | undefined;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  onColumnsCountChange(colsNum: number) {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategoria: string) {
    this.categoria = newCategoria;
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }
}
