// const materials = [
//   'Hydrogen',
//   'Helium',
//   'Lithium',
//   'Beryllium'
// ];

// console.log(materials.map(material => material.length));

// let x =   (x, y) => x + y;
// console.log(x(1, 2))

// let sayHi = () => console.log("Hello!");
// sayHi();

// let squareNum = x => x * x
// console.log(squareNum(3))

// let myfunc = {
  
// }
// let myfunc={
//       showargs: function(){
//       console.log(arguments)
//       },
//   }
//   myfunc.showargs(1, 2, 3, 4)  

//   let myfunc1 = {
//     showargs: () => {
//       console.log(arguments);
//     },
// };
// myfunc1.showargs(1, 2, 3, 4);


// const sayhello = function() {
//   console.log("hello");

// }
//   sayhello();


// const sayHello = () => {
//   console.log("hello");
 
// }
// sayHello()

// const sayHello1 = (name) => {
//   console.log(`hello, ${name}`);
 
// }
// sayHello1("madhu")

// const foo = function() {
//   console.log("foobar");
// }
// foo(); // Invoke it using the variable
// foobar

// const sayhello = function() {
//     console.log(arguments);
  
//   }
//     sayhello('madhu', 'sri');
//   // i think variable  always available inside regular fun as an array of arguments that you pass in even thoughi didn't define up here 
//   // here the output is 0,1,2 array
//   const sayhello1 = () => {
//     console.log(arguments);
  
//   }
//     sayhello1('madhu', 'sri');

    // if I convert it and call it in the same way it says an output that argument is not defined
     

  // setTimeout(function(){
  //   console.log('hello')}
  //   , 1000) 

    // setTimeout(() => {
    //   console.log('hello')}
    //   , 1000) 
  
    // function sayhello(){
    //   console.log('hello')}

    //   sayhello()

    // sayhello1() => {
    //   console.log('hello')}
  
    // sayhello()

    // function person(n) {
    //   this.name = n  }
    // const me = new person('madhu')
    // me
  //   function Person(firstName, lastName) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  // }
  // let person = new Person('John','Doe');
//    const Person = (n) => {
//     this.name = n;
//     this.lastName = lastName;
// }

// Person is not a constructor

// const me = {
//   talk:function(){
//     console.log('hello')
//   }
// }
// me.talk()
//////////////////////////////////////////////////eee/////////////rr/r//r//
// const you = {
//   talk:()=> 'hello'
//   }

// you.talk()

// const array = [1, 2, 3]
// array.map(i => {})

// const me = {
//     name:'john',
//     talk:function(){
//       return this
//     },
//     arrowTalk : () =>{
//       return this
//     }
//   }
//   me.talk()

// let nameobj = {
//   fullName : "john",
//   regular:function(){
//     console.log(`my name is ${this.fullName}`);
//   },
   
//     arrow: () =>  console.log(`my name is ${this.fullName}`),
// }
// nameobj.regular();
// nameobj.arrow();


// class test {
//   constructor(){
//     this.id = 67;
//   }
//   addclickevent(){
//       let buttonEle= document.querySelector('#check_button')
//       buttonEle.addEventListener('click', function(){
//           this.style.backgroundcolor = 'red';
//     });
//   }
// }
// let t = new test();
// t.addclickevent()



class test {
  constructor(){
    this.id = 67;
  }
  addclickevent(){
    let buttonEle= document.querySelector('#check_button')
    buttonEle.addEventListener('click', () => {
      // this.style.backgroundcolor = 'red';
    });
  }
}

// let t1 = new test();
// t1.addclickevent()
// function MyCat(name) {
//   this.catName = name;
// }
// MyCat.prototype.sayCatName = () => {
//   console.log(this === window); // => true
//   return this.catName;
// };
// const cat = new MyCat('Mew');
// cat.sayCatName();
// function MyCat(name) {
//   this.catName = name;
// }
// MyCat.prototype.sayCatName = function() {
//   console.log(this === cat); // => true
//   return this.catName;
// };
// const cat = new MyCat('Mew');
// cat.sayCatName(); // => 'Mew'

// const myFunction = () => {
//   console.log(this);
// };

// call it
// myFunction();
const myFunction1 = function() {
  console.log(this);
  return myFunction1
}

// call it
myFunction1();
// const sayhello = function() {
//       console.log(arguments);
// }

// function getItems(){
//   return null
// }
// let [a=10, b=20] = getItems({

// })
// const g= ()
function getUsers(callback){ 
  setTimeout(()=>{ 
  callback( [ 
    {userName: 'john', email:'abc@com.com'}, 
    {userName: 'Kevin', email:'kbc@com.com'} 
    ]) 
    }, 1000) 
    } 
    function findUser(userName, callback){ 
    getUsers((users) => { 
    const user = users.find((user) => user.userName === userName); 
    callback(user); 
    }); } 
    findUser('Kevin', console.log) 




const getUsers = () =>{
  return new Promise((resolve, reject) => {})
}
    const readFilePromise = () => {
      return new Promise((resolve, reject) => {
        fs.readFile(filePath, options, (err, data) => {
          if (err) return reject(err)
          resolve(data)
        })
      })
    }
    