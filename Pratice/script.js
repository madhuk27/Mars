// let avengers = [
//   {name: "steve rogers", heroName: "captain america"},
//   {name: "tony stark", heroName: "iron man"},
//   {name: "bruce banner", heroName: "the hulk"},
//   {name: "peter parker", heroName: "spiderman"},
//   {name: "tchalla", heroName: "black panther"}
// ]

// let getName = avenger =>avenger.name;

// let realNames = avengers.map(getName);

// console.log(realNames);

let data = [ {id: 3154, name: 'Anala Kaniyar', email: 'kaniyar_anala@vandervort-ruecker.biz', gender: 'male', status: 'inactive'},
              {id: 3153, name: 'Chidambar Dwivedi', email: 'chidambar_dwivedi@mcdermott.co', gender: 'female', status: 'active'},
              {id: 3152, name: 'Chidaatma Pilla', email: 'chidaatma_pilla@ziemann.name', gender: 'male', status: 'active'}]

    let names = data.map(data => data.name);

  console.log(names);