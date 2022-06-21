function SalesTotals(sales){
    let newSales = sales.map(sale=>{
        let {original, stock, discount=0.0} = sale;
        sale['sale'] = Math.floor((original - original * discount)* 100)/ 100;
        // sale['sale'] = original - original * discount;
        sale['total'] = sale.sale*sale.stock;
       
        return sale;
    });
    return newSales;
  }
  
  const sales = [ 
    // { item: 'PS4 Pro', stock: 3, original: 399.99 }, 
    // { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 }, 
    // { item: 'Nintendo Switch', stock: 4, original: 299.99 }, 
    // { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 }, 
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.656766 } 
    ]; 
  let newSales = SalesTotals(sales);
  console.log(newSales);

  // just restrict the values to 2 decimal points only


  // Math.round(sale.sale*sale.stock * 100) / 100
  