import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy,
} from "@angular/core";
import { Subscription } from "rxjs";
import { StoreService } from "src/app/services/store.service";

@Component({
  selector: "app-filters",
  templateUrl: "filters.component.html",
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();
  categoriasSubscription: Subscription | undefined;
  categorias: Array<string> | undefined;
  constructor(private storeService: StoreService) {}
  ngOnDestroy(): void {
    if (this.categoriasSubscription) {
      this.categoriasSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.categoriasSubscription = this.storeService
      .getAllCategories()
      .subscribe((response) => {
        this.categorias = response;
      });
  }

  onShowCategoty(categoria: string) {
    this.showCategory.emit(categoria);
  }
}
