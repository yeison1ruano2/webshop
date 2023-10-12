import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = "descendente";
  itemsShowCount = 12;
  constructor() {}

  ngOnInit(): void {}

  onSortUpdated(newSort: string) {
    this.sort = newSort;
  }

  onItemsUpdated(contador: number) {
    this.itemsShowCount = contador;
  }

  onColumnsUpdated(colsNum: number) {
    this.columnsCountChange.emit(colsNum);
  }
}
