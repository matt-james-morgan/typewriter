const sentence = "hello there from lighthouse labs";
let count = 0;
let count2 = 0;
for(const char of sentence){
  setTimeout(()=>{
    process.stdout.write(char);
  }, count+=50);
  if(count2 === sentence.length-1){
    setTimeout(()=>{
      console.log('')
    }, count);
  }
  count2++
}



