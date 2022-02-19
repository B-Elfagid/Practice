import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// setup vars

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/71rdsaOMvVL._AC_UL127_SR127,127_.jpg',
  title: 'Reminders of him',
  author: 'Colleen Hoover'
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51Zu0ZwT0jL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  title: 'It Ends With Us',
  author: 'Colleen Hoover'
}



function BookList(){
  return(
  <section className='booklist'> 
     <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} /> 
     <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
  </section>) 
}



const Book = (props) => {
  const { img, title, author } = props;
  return(
   <article className='book'>
    <img src= {img}
     alt="" />
    <h1>{title}</h1> 
    <h4>{author} </h4>
  </article>
  )
}


ReactDom.render(<BookList />, document.getElementById('root'))


