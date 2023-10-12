import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "filters.component.html",
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();
  categorias = ["shoes", "sports"];
  constructor() {}

  ngOnInit(): void {}

  onShowCategoty(categoria: string) {
    this.showCategory.emit(categoria);
  }
}
