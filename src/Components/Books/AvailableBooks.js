import classes from './AvailableBooks.module.css'
import Card from '../UI/Card';
import BookItem from './BookItem';

const Books = [
    {
      id: 'b1',
      name: 'Book1',
      description: 'Very interesting and shoking story! ',
      price: 25,
    },
    {
      id: 'b2',
      name: 'Book2',
      description: 'A real story of life of the Queen!',
      price: 30,
    },
    {
      id: 'b3',
      name: 'Book3',
      description: 'Unforgettable adventures of three friends and the dog!',
      price: 32,
    },
    {
      id: 'b4',
      name: 'Book4',
      description: 'If you want to learn how to cook, you definately should buy it!',
      price: 28,
    },
  ];

const AvailableBooks = ()=>{
    return(
        <section className={classes.books}>
            <Card>
                <ul>
                    {Books.map( book => <BookItem key ={book.id} name = {book.name} 
                    description = {book.description} price = {book.price} id = {book.id}/>)}
                </ul>
            </Card>
        
        </section>
    )

}

export default AvailableBooks;