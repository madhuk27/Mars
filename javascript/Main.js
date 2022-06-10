// // let age = 12;
// // let month = 'August'

// // if (age>=18){
// //     console.log("Eligible")
// // }
// // else{
// //     console.log("Not Eligible")
// // }

// // let eligible = age>18? true: false

// // console.log(eligible)

// // switch(month){
// //     case 'January':
// //         console.log("January")
// //         break
// //     case 'April':
// //          console.log("April")
// //         break
// //     case 'August':
// //         console.log("August")
// //         break
// //     case 'May':
// //         console.log("May")
// //         break
// // }
// for(let i=0; i<5; i++){
//     if(i%2 == 0){
//         continue
//     }
//     console.log(i)
// }

// let name = 'Madhu'
// let greet = `Hello ${name}` ;
// console.log(greet)
// console.log(name[2])
// console.log(name[name.length-1])



// let n = 10
// console.log(typeof n)
// let str= String(n)
// console.log(typeof str)
// let newstr = 'new '+n
// let str1 = n.tostring

// let str ='Hi';
// str[0] ='h';
// console.log(str[0]);
// alert( str[0] );


// function isOdd(n) {
//     return Boolean(n % 2);
//   }
  
//   function findSum(no) {
//     let sum = 0;
  
//     for (var i = 0; i < 6; i++) {
//       if (isOdd(i)) {
//         sum += i;
//       }
//     }
//     return sum;
//   }
  
//   console.log(findSum(100));

// 6june - 

// ARRAYS 
// FILTER


// let names= ["j", 'k', "s", "v"]
// // console.log(names);  [ 'k', 'l', 's' ]
// // console.log("names: ", names);names:  [ 'k', 'l', 's' ]
// names[2] ="p"
// names.pop()
// names.push ("A")
// names.shift()
// names.unshift("e")
// names.push ("ka")


// // for (name of names){
// //   console.log(name)
//   // console.log(names[name])
// // }
// // // console.log("names: ", names);

// for (name in names){
// //   console.log(name)
//      console.log(names[name])
// }
// // let knames = names.filter(nameswithk)
// // console.log("filterednames: ",knames)

// // let oneString= knames.reduce(addnames, '')
// // console.log("All k names together: "+oneString)

// // function addnames(str, name){
// //       returnstr+name
// // }

// // function nameswithk(name){
// //   return name.startswith("k");
// // }


// // let newnames =names.map(appendval)

// // function appendval(name){
// //   return "returner " + name
// // }
// // console.log("newnames: ", newnames)


// // names.length = 6;
// // console.log("names: ", names)





// let marks = [8, 6, 7, 9, 5]

// let summarks = ("Avg marks", summarks/marks.length)


// function getavg()


// let myfunc


// // 7 june
// let firstName='demo'
// let person= {
//     firstName: "Siva",
//     lastName: "Madhu",
//     age:25,
//     department:"Sales",
//     greet(){
//         // console.log('Hello '+this.firstName)
//     }
// }

// function Student(firstName, lastName, age){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.age=age;
// }
// let Stud1 = new Student("k","m", 23);
// let Stud2 = new Student("t","h", 13);
// let Stud3 = new Student("l","s", 19);

// console.log(Stud2.lastName)

// console.log(person.firstName + "" + person["lastName"] , person.age)

// for(const key in person){
//     console.log(key+ ":"+person[key])
// }

// person.greet()
// let employee = {
//     empId : "121",
//     address : "Wisconsin",
// }
// employee._proto_ = person;
// console.log(employee.lastName)
// console.log(person)

// let student={
//     name:"John",
//     class:"10",
//     grade:"A"
// }
// student.rollNo = "5"

// for(const key in student){
//     console.log(key+":"+student[key])
// }


// let a ={
//     eat:"t",
// };
// let r = {
//     jump: "t",
//     __proto__:a
// };
// for(let prop in r){
//     console.log(prop)
// }
// let name="m";
// console.log(`hello ${1}`);
// console.log(`hello ${"name"}`);
// console.log(`hello ${name}`);
// console.log(name +12);
// console.log(name +12+3);
// console.log(name +(12+3));
// console.log(12+3 + name);

// class User{
//  name;
//  constructor(name){
//         this.name=name;
//  }
//  getName(){
//      return this.name
//  }
//  namecContains(str){
//      return this.getName().includes(str);
//  }
// }
// const User = new User('jon');
// User.isName Taken('jon');
// User.isName Taken('snow')


class User{
    #userName
    constructor(name){
        this.#userName= name;
    }
    get name(){
        console.log("Getting the name...")
        return this.#userName;
    }
    set name(name){
        console.log("setting the name...")
        if(name === " "){
            throw new error("field cannot be empty")
        }
        this.userName = name
    }
}
const user = new User("Dave")
const user1 = new User("")

user.name='smith'
user1.name=''

// user.get()
console.log(user.name)
console.log(user1.name)
