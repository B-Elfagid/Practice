import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const author = 'Colleen Hoover'
const title = 'Reminders of him'
const img = 'https://images-na.ssl-images-amazon.com/images/I/71rdsaOMvVL._AC_UL127_SR127,127_.jpg'

function BookList(){
  return(
  <section className='booklist'> 
     <Book job='developer' /> 
  </section>) 
}



const Book = (props) => {
  return(
   <article className='book'>
    <img src= {img}
     alt="" />
    <h1>{title}</h1> 
    <h4>{author} </h4>
    <p>{props.job}</p>
  </article>
  )
}


ReactDom.render(<BookList />, document.getElementById('root'))


