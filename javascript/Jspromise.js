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


function getUser(onSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Handle resolve and reject in the asynchronous API
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
  
// Run the getUsers function with the true flag to resolve successfully
getUser(true)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  })