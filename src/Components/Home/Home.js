import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BookList from '../BookList/BookList';


const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const Home = () => {
    const [books, setBooks] = useState(null)

    useEffect(() => {
        fetch('https://shrouded-badlands-44210.herokuapp.com/bookList')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);
    const classes = useStyles();
    return (
        <div className="container">
            <div className="row">

                {/* {books.map(book => <BookList id={book._id} book={book}></BookList>)} */}
                {books ?
                    books.map(book => <BookList id={book._id} book={book}></BookList>)
                    :
                    <Backdrop className={classes.backdrop} open>
                        <CircularProgress color="inherit" />
                    </Backdrop>}
            </div>


        </div>

    );
};

export default Home;