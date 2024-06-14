import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  sort = "descendente";
  itemsShowCount = 12;
  constructor() {}

  ngOnInit(): void {}

  onSortUpdated(newSort: string) {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdated(contador: number) {
    this.itemsShowCount = contador;
    this.itemsCountChange.emit(contador);
  }

  onColumnsUpdated(colsNum: number) {
    this.columnsCountChange.emit(colsNum);
  }
}
