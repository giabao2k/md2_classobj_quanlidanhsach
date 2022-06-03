import { Book } from "./Book";
import { BookMannager } from "./BookManager";
let bookManager = new BookMannager()
let book1 = new Book('js','20A');
let book2 = new Book('c', '30A');
let book3 = new Book('ABC','22')
let book4=  new Book('BCD','1')
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
bookManager.add(book4);
bookManager.update('20A','JS')
console.log(bookManager)