"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookMannager = void 0;
class BookMannager {
    constructor() {
        this.books = [];
    }
    // them 1 cuon sach
    add(book) {
        this.books.push(book);
    }
    // hien thi 1 danh sach
    getList() {
        return this.books;
    }
    // xoa 1 cuon sach theo ma
    delete(ID) {
        let indexBookDelete = this.findBook(ID);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        }
        else {
            throw new Error('Khong co id');
        }
    }
    //update sach
    update(ID, name) {
        let indexBookUpdate = this.findBook(ID);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name);
        }
        else {
            throw new Error('update error');
        }
    }
    //ham tra ve id
    findBook(ID) {
        let i = -1;
        this.books.forEach((book, index) => {
            if (book.ID === ID) {
                i = index;
            }
        });
        return i;
    }
}
exports.BookMannager = BookMannager;
