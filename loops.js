function forLoop(array){
  
  for (let i = 0; i<25; i++){
    if (i === 1)
     array.push("I am 1 strange loop.")
    else
     array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
  }
  return array;
}

function whileLoop(n){
  while(n>0){
    console.log(n)
    n--
  }
  return 'done';
}


function doWhileLoop(array){
  let i = 0;
  function incrementVariable() {
  i = i + 1;
  }
  do {
  incrementVariable();  
  array.pop();
  }while(array.length>=0 && incrementVariable());
  return array
}
