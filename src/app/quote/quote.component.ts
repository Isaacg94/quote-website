import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'Abraham Lincoln', 'Nothing valuable can be lost by taking time.', 'Obizzy',new Date(2018,10,29)),
    new Quote(2,'6ix9ine',"Spiderman's real name is Peter Parker.", 'MemeLord',new Date(2019,8,12)),
    new Quote(3,'my Ex','To the moon & back, remember?', 'Google User',new Date(2019,8,23)),

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
