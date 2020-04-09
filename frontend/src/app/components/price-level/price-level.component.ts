import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-level',
  templateUrl: './price-level.component.html',
  styleUrls: ['./price-level.component.css']
})
export class PriceLevelComponent implements OnInit {

  @Input()
  priceLevel: number;

  priceLevelSymbol: string;

  constructor() { }

  ngOnInit(): void {
    if (this.priceLevel === 3) {
      this.priceLevelSymbol = '€€€';
    } else if (this.priceLevel === 2) {
      this.priceLevelSymbol = '€€';
    } else {
      this.priceLevelSymbol = '€';
    }
  }

}
