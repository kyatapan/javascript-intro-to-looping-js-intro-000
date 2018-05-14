function forLoop(array) {
  for(i=0; i<25; i++) {
    if (i+1 == 1) {
      array.push(`I am ${i+1} strange loop.`);
    }
    else {
      array.push(`I am ${i+1} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n) {
  while(n>=0) {
    console.log(`${n}`);
  }
  console.log('done');
}