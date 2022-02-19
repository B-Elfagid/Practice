import React from 'react';
import ReactDom from 'react-dom';
function Greeting(){
  return (
    <div>
      <Person />
     <h4>This is Betty and This is My first Component</h4>
     </div>
      )
}

const Person = () => {
  return <h2>Betty Davide</h2>
}
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello')
// }

ReactDom.render(<Greeting />, document.getElementById('root'))


