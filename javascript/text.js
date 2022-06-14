// function getUsers(callback){ 
//     setTimeout(()=>{ 
//     callback( [ 
//       {userName: 'john', email:'abc@com.com'}, 
//       {userName: 'Kevin', email:'kbc@com.com'} 
//       ]) 
//       }, 1000) 
//       } 
//       function findUser(userName, callback){ 
//       getUsers((users) => { 
//       const user = users.find((user) => user.userName === userName); 
//       callback(user); 
//       }); } 
//       findUser('Kevin', console.log) 


//       function getUser(onSuccess) {
//         return new Promise((resolve, reject) => {
//           setTimeout(() => {
//             // Handle resolve and reject in the asynchronous API
//             if (onSuccess) {
//               resolve(
//                 {userName: 'Kevin', email:'kbc@com.com'}, 
//                 )
//             } else {
//               reject('Failed to fetch data!')
//             }
//           }, 1000)
//         })
//       }
     
//       function findusers(userName) {
//           return new Promise((resolve, reject) => {
//             const user = user.find((user) => user.userName === userName); 
//           })
//       }
//     // Run the getUsers function with the true flag to resolve successfully
//     getUser(true)
//       .then((response) => {
//         console.log(response)
//       })
//       .catch((error) => {
//         console.error(error)
//       })

const genres = ['comedy', 'drama', 'action'];

function getGenres() {
  var promise = new Promise( (resolve, reject) => {
     let result = genres[0]  //just picking out the first one as example
     resolve(result)
  })
  return promise
}

const result_as_promise = getGenres()
console.log(result_as_promise);

//output:
//Promise { 'comedy' }

let result_as_value = getGenres().then(result => result_as_value = result)

setTimeout(function () {
  console.log(result_as_value);
}, 0);
