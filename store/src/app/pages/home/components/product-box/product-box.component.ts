import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Component({
  selector: "app-product-box",
  templateUrl: "./product-box.component.html",
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: "Snicekers",
    price: 150,
    category: "shoes",
    description: "Description",
    image: "https://via.placeholder.com/150",
  };
  @Output() addToCart = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
