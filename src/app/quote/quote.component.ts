import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'watch me', 'jaden smith',new Date(2018,10,29)),
    new Quote(2,'indigo','willow smith',new Date(2019,8,12)),
    new Quote(3,'get jiggy','snoop lion',new Date(2019,8,22)),

  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  boringQuote(isBoring, index){
    if (isBoring) {
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
