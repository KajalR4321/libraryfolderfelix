import books from "./book.js";
class libraray{
    constructor(name){
        this.name=name;
        this.booklist=[]
    }
    // books is object in this parameter @params=>books(object)
    addbook(bk){
        //(!not operator) instance is basically use for object is present or not if it is present it will true otherwaise false
        if(!(bk instanceof books)){
            console.error("hey you tried to something is not a add object");
        }
        this.booklist.push(bk); 
        console.log("book added succesfully")

    }
}
export default libraray;