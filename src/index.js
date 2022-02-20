import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// setup vars
const books = [
{
  id:1,
  img: 'https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL604_SR604,400_.jpg',
  title: 'Reminders of him',
  author: 'Colleen Hoover',
},

{
  id:2,
  img: 'https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL604_SR604,400_.jpg',
  title: 'It Ends With Us',
  author: 'Colleen Hoover',
},
];






function BookList(){
  return(
  <section className='booklist'> 
     {books.map((book)=>{
       return <Book key={book.id} book={book}/>
     })}
  </section>) 
}


// const Book = ({img, title, author, children}) => {
const Book = (props) => {
  const { img, title, author } = props.book;

  const handleClick = () => {
    
  }

  const complexExample = (author) => {
   console.log(author);
  }

  return(
   <article 
   className='book' 
   onMouseOver={() => {console.log(title)}}>
    <img src= {img}
     alt="" />
    <h1>{title}</h1> 
    <h4>{author} </h4>
    <button type='button' onClick={handleClick}>Click Me</button>
    <button type='button' onClick={() => complexExample(author)}>Complex Example</button>
  </article>
  )
}


ReactDom.render(<BookList />, document.getElementById('root'))


