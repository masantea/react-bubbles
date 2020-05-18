import React, {useState} from "react";
import axios from "axios"

const Login = (props) => {

  const [username, setUsername] = useState('') 
  const [password, setPassword]= useState('')

  //console.log()

  const login = e => {
    e.preventDefault();
    //Make a POST request and send the credentials object to the api
    axios
      .post('http://localhost:5000/api/login', {username, password} )
      .then(res => (localStorage.setItem('token', res.data.payload), console.log(res))) //first consolelog res, 
      .catch(err => console.log(err.message))

      //props.history.push('/protected')
  
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
  
      <form onSubmit= {login}>

        <input 
        type ="text"
          onChange={(e) => setUsername(e.target.value)} 
        />
         <input 
        type ="password"
        onChange={(e) => setPassword(e.target.value)}
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;