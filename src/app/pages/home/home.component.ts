import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Product } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";
import { StoreService } from "src/app/services/store.service";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit, OnDestroy {
  cols: any = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  categoria: string | undefined;
  products: Array<Product> | undefined;
  sort = "desc";
  count = "12";
  productsSubscription: Subscription | undefined;
  constructor(
    private cartService: CartService,
    private storeService: StoreService
  ) {}
  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsSubscription = this.storeService
      .getAllProducts(this.count, this.sort, this.categoria)
      .subscribe((_products) => {
        this.products = _products;
      });
  }

  onColumnsCountChange(colsNum: number) {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategoria: string) {
    this.categoria = newCategoria;
    this.getProducts();
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

  onItemsCountChange(newCount: number) {
    this.count = newCount.toString();
    this.getProducts();
  }

  onSortChange(newSort: string) {
    this.sort = newSort;
    this.getProducts();
  }
}
