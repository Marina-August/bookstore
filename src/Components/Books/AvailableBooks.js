import { useState,useEffect,useCallback } from 'react';
import classes from './AvailableBooks.module.css'
import Card from '../UI/Card';
import BookItem from './BookItem';


const AvailableBooks = ()=>{
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooksHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://movies-database-server.onrender.com/books');
      console.log(response);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      console.log(data);

      const transformedBooks = data.map((bookData) => {
        return {
          id: bookData._id,
          name: bookData.name,
          description: bookData.description,
          price: bookData.price
        };
      });
      console.log(transformedBooks);
      setBooks(transformedBooks);
      // setBooks(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBooksHandler();
  }, [fetchBooksHandler]);

  let content = <p>Found no books.</p>;

  if (books.length > 0) {
    content = 
    <section className={classes.books}>
            <Card>
                <ul>
                    {books.map( book => <BookItem key ={book.id} name = {book.name} 
                    description = {book.description} price = {book.price} id = {book.id}/>)}
                </ul>
            </Card>
     </section>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }


    return(
      <section className={classes.books}>{content}</section>
    )

}

export default AvailableBooks;