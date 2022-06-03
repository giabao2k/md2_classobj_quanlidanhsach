export class Book {
    name : string;
    ID : string;
    constructor(name : string, ID : string){
        this.name = name;
        this.ID = ID;
    }

    getName() : string{
        return this.name;
    }

    setName(name : string){
        this.name = name;
    }

    getId() : string{
        return this.ID;
    }
}