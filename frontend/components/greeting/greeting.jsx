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
  const loggedIn = () => (
    <div >
      <h2>Welcome, {props.currentUser.username}.</h2>
      <h3>Shine on, you Crazy Diamond.</h3>
      <div className='button-div'>
        <button
          className='demo-login'
          onClick={()=> props.logout()}
          >LOGOUT</button>
      </div>
    </div>
  );

  const loggedOut = () => (
    <div>
      <h2>You're not logged in</h2>
      <div className='session-link'>
        <Link to='/login' className='lank'>Login</Link>
        <Link to='/signup'className='lank'>Sign Up</Link>
      </div>
      <div className='button-div'>
        <button
          className='demo-login'
          onClick={()=> props.login({username: 'Josuke', password: 'CrazyDiamond'})}
          >Demo Login</button>
      </div>
    </div>
  );
  return ( props.currentUser ? loggedIn() : loggedOut()
    // <div>
    //   <h2>You {props.currentUser ? 'are' : ' are not'} logged in.</h2>
    //   <div className='greet'>
    //     <button
    //       onClick={()=> props.login({username: 'Josuke', password: 'CrazyDiamond'})}
    //       >LOGIN</button>
    //   </div>
    // </div>
  )
}

export default Greeting;
