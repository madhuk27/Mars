// // import React from 'react';

// // class MyComponent {
// //     constructor(props);{
// //             super();
// //             this.state = {
// //                 name:'madhu',
// //                 city:'wisconsin'
// //             };
// //         }
// //         handleChange = (event) => {
// //             // alert(event.target.value)
// //             this.setState({
// //                 color: event.target.value
// //             })
// //         };
// //         render(){
// //             return (
// //             <div>
// //                 // <h2>This is MyComponent</h2>
// //                 <h3>{this.props.name} is passed by a parent class</h3>
// //                 <h2>This is MyComponent city: {props.city}</h2>
// //                 <input type='text' id='name' name='test' />
// //                 <button onClick={this.state.city}>Change</button>
// //             </div>
// //         );
// //      }
// // }
// // export default MyComponent; 



// import React,{useState} from 'react';

// function MyComponent(props) {
//     const[color, setColor] = useState("");
//     // const[name, changeName] =useState("");
//     const[car, setCar] = useState({
//         Make: 'Ford',
//         Model: 'T',
//         year: '1903',
//         color:'Blue'
//     })
//     return (
//         <div>
//             <h3>My favourite color is: {color}</h3>
//            <input type='radio' name ='color' value='green' onChange={(e)=>setColor(e.target.value)} /> green
//            <input type='radio' name ='color'  value='red' onChange={(e)=>setColor(e.target.value)} /> red
//            <input type='radio'  name ='color' value='blue' onChange={(e)=>setColor(e.target.value)} /> blue
//            <input type='radio' name ='color' value='gray' onChange={(e)=>setColor(e.target.value)} /> gray
//             <h2>My {this.state.Make} {this.state.Model} car built in year {this.state.year} is of {this.state.color} color </h2>
//             <button onClick={()=>setCar({color:"blue"})}>change car color</button>

       
//        </div>

//     );
// }

// export default MyComponent;
