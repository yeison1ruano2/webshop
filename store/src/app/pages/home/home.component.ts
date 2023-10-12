import { Component, OnInit } from "@angular/core";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  cols: any = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  categoria: string | undefined;
  constructor() {}

  ngOnInit(): void {}

  onColumnsCountChange(colsNum: number) {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategoria: string) {
    this.categoria = newCategoria;
  }
}
