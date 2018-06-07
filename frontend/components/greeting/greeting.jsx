import React from 'react';
import {Link} from 'react-router-dom';

// class Greeting extends React.Component {
//
//   constructor(props){
//     super(props)
//
//   }
//
//   render () {
//     return (
//       <div>
//         <h2>Look at my cat. My cat is Amazing.</h2>
//       </div>
//     )
//   }
//
// }

const Greeting = props => {
  const loggedInTest = () => (
    <div>
      <h2>You're logged in</h2>
    </div>
  );

  const loggedOutTest = () => (
    <div>
      <h2>You're not logged in</h2>
    </div>
  );
  return (
    <div>
      <h2>You {props.currentUser ? 'are' : ' are not'} logged in.</h2>
      <div className='greet'>
        <button
          onClick={()=> props.login({username: 'Josuke', password: 'CrazyDiamond'})}
          >LOGIN</button>
        <button
          onClick={()=> props.logout()}
          >LOGOUT</button>
      </div>
    </div>
  )
}

export default Greeting;
