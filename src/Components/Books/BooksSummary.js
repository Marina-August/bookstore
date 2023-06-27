import classes from './BooksSummary.module.css';

const BooksSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Amazing Books, Delivered To You</h2>
      <p>
        Choose your  book from our broad selection of available books
        and enjoy reading it at home, in the park or on your way to work.
      </p>
    </section>
  );
};

export default BooksSummary;