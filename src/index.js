import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function BookList(){
  return <section> <Book /> <Book /> <Book /></section>
}

const Book = () => {
  return <article>
     <Image></Image>
     <Title />
     <Author />
  </article>
}

const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/71rdsaOMvVL._AC_UL127_SR127,127_.jpg" 
  alt="" />
)

const Title = () => <h1>Reminders of him</h1> 
const Author = () => <h2>Colleen Hoover</h2>

ReactDom.render(<BookList />, document.getElementById('root'))


