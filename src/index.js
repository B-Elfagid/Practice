import React from 'react';
import ReactDom from 'react-dom';
import { books } from './books';
import './index.css';
import Book from './book'


// setup vars

function BookList(){
  return(
  <section className='booklist'> 
     {books.map((book)=>{
       return <Book key={book.id} book={book}/>
     })}
  </section>) 
}


// const Book = ({img, title, author, children}) => {


ReactDom.render(<BookList />, document.getElementById('root'))


