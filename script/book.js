class books{
    constructor(author,publishedby,publishedyear,title,quantity,ISBN ){
        this.author=author;
        this.publishedby=publishedby;
        this.publishedyear=publishedyear;
        this.title=title;
        this.borrow=0;
        //(paraseINtquantity||1)make sure quantitiy is a number alt least one
        this.quantity=parseInt(quantity)||1;
        //unique value identify like barcode
        this.ISBN=ISBN;
        //user give negative value use if 
        if(this.quantity<0){
            this.quantity=1;
        }
      
    }
}
export default books;