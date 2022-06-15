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


function getUser(onSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (onSuccess) {
        resolve(
          {userName: 'Kevin', email:'kbc@com.com'}, 
          )
      } else {
        reject('Failed to fetch data!')
      }
    }, 1000)
  })
}
  
getUser(true)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  })


  /* let success = true;
function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
            {userName: 'john', email:'abc@com.com'}, 
            {userName: 'Kevin', email:'kbc@com.com'} 
        ]);
      } else { 
               reject('Failed to the user list');
      }
    }, 1000);
  });
}
function onFulfilled(users) {
  console.log(users);
}
function onRejected(error) {
  console.log(error);

}
const promise = getUsers();

promise.then(onFulfilled, onRejected);*/