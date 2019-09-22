import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Nothing valuable can be lost by taking time.', 'Abraham Lincoln', 'Obizzy',new Date(2018,10,29)),
    new Quote(2,"Spiderman's real name is Peter Parker.", '6ix9ine','MemeLord',new Date(2019,8,12)),
    new Quote(3,'To the moon & back, remember?','my Ex', 'Google User',new Date(2019,8,23)),

  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  boringQuote(isBoring, index){
    if (isBoring) {
      this.quotes.splice(index,1);
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.publishDate = new Date(quote.publishDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
