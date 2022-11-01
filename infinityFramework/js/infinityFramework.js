let text = '';

for(let i = 5; i < 100; i += 5){
    text += `.w${i}{width: ${i}%} .vw${i}{width: ${i}vw;} \n`
}
  
  for(let i = 5; i < 100; i += 5){
    text += `.h${i}{height: ${i}%} .vh${i}{height: ${i}vw;} \n`
}

console.log(text)