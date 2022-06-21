// // // // import React, { Component } from 'react';

// // // // class MyClassComponent extends Component {
// // // //     constructor(){
// // // //         super();
// // // //         this.state = {
// // // //             name: 'peter',
// // // //             city: 'milwakue'
// // // //         }
// // // //     }
// // // //     handlechange(){
// // // //         this.state({
// // // //             city: 'Dallas'
// // // //         })    
// // // //     }
// // // //     render() {
// // // //         return (
// // // //             <div>
// // // //                 <h1>MyClassComponent</h1>
// // // //                 <h3>{this.props.name} is passed by parent</h3>
// // // //                 <h3>CITY: {this.state.city}</h3>
// // // //                 {/* <input type='text' name='first' id='first' onchange={this.handlechange} /> */
// // // //                 <button onchange={this.handlechange}>change</button>
// // // //         }</div>
// // // //         );
// // // //     }
// // // // }

// // // // export default MyClassComponent;


// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// function App() {
//   // React States
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   // const database = [
//   //   {
//   //     username: "user1",
//   //     password: "pass1"
//   //   },
//   //   {
//   //     username: "user2",
//   //     password: "pass2"
//   //   }
//   // ];

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     // const userData = database.find((user) => user.username === uname.value);

//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for login form
//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label>Username </label>
//           <input type="text" name="uname" required />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="input-container">
//           <label>Password </label>
//           <input type="password" name="pass" required />
//           {renderErrorMessage("pass")}
//         </div>
//         <div className="button-container">
//           <input type="submit" />
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div className="app">
//       <div className="login-form">
//         <div className="title">Sign In</div>
//         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useCallback, useEffect, resetForm } from "react";
// import { useForm } from "react-hook-form";

// export default function App() {
//   const { register, handleSubmit, reset } = useForm();
//   const onSubmit = (data, e) => {};
  
//   const resetAsyncForm = useCallback(async () => {
//     const result = await fetch('./api/formValues.json'); // result: { firstName: 'test', lastName: 'test2' }
//     reset(result); // asynchronously reset your form values
//   }, [reset]);
  
//   useEffect(() => {
//     resetAsyncForm()
//   }, [resetForm])

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName", { required: true })} />
//       <input {...register("lastName")} />
//       <input type="reset" /> // standard reset button
//       <input type="button" onClick={() => {reset({ firstName: "bill" })}} /> // reset form with values
//       <input type="button" onClick={() => {
//         reset({
//           firstName: "bill"
//         }, {
//           keepErrors: true, 
//           keepDirty: true,
//           keepIsSubmitted: false,
//           keepTouched: false,
//           keepIsValid: false,
//           keepSubmitCount: false,
//         });
//       }} />
//     </form>
//   );
//   }


// // // import logo from './logo.svg';
// // import './styles.css';
// // import React,{useState} from 'react';

// // function App() {
// // const [data,setData] = useState({
// //   username:"",
// //   password:""
// // })

// // const {username,password,Email} = data;

// // const changeHandler = e => {
// //   setData({...data,[e.target.name]:[e.target.value]});
// // }

// // const submitHandler = e => {
// //   e.preventDefault();
// //   console.log(data);
// // }
// //   return (
// //     <div>
// //       <center>
// //       <form onSubmit={submitHandler}>
// //       <h1>UserName</h1>
// //       <input type="text" name="username" value={username} onChange={changeHandler}/><br/>
// //       <h1>Password</h1>
// //       <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
// //       <h1>Email</h1>
// //       <input type="Email" name="Email" value={Email} onChange={changeHandler} /><br/>
// //       <input type="submit" name="submit"/>
// //       </form>
// //       </center>
// //     </div>

// //   );
// // }

// // export default App;