import React from 'react'

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
  

export default Book