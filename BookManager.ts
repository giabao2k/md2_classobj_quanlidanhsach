import { Book } from "./Book";
export class BookMannager{
    books: Book[]  = [];
    constructor(){

    }
    // them 1 cuon sach
    add(book: Book): void{
        this.books.push(book);
    }
    // hien thi 1 danh sach
    getList() : Book[]{
        return this.books;
    }
    // xoa 1 cuon sach theo ma
    delete(ID: string): void{
        let indexBookDelete = this.findBook(ID);
        if(indexBookDelete != -1){
            this.books.splice(indexBookDelete,1)

        }
        else{
            throw new Error('Khong co id')
        }
    }
    //update sach
    update(ID: string, name:string) {
        let indexBookUpdate =this.findBook(ID);
        if(indexBookUpdate != -1){
            this.books[indexBookUpdate].setName(name);
        }else {
            throw new Error('update error')
        }
    }
    //ham tra ve id
    findBook(ID: string) {
        let i = -1;
        this.books.forEach((book, index) => {
            if(book.ID === ID) {
                i = index
            }
        })
        return i;
    }
}