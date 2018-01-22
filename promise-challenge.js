function addTwoNumbers(a, b){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      }
      else{
        reject('Please enter numeric values only');
      }
    }, 1000);
  });
}

addTwoNumbers(2,2).then(function(result){
  console.log(result);
}, function(err){
  console.log('Failed to add numbers', err);
});

addTwoNumbers(2,'a').then(function(result){
  console.log(result);
}, function(err){
  console.log('Failed to add numbers', err);
});
