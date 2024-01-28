const fs = require('fs');

function rand_index(len){
  return parseInt((Math.random() * len) + 1);
}
function rand_num(){
  return parseInt((Math.random() * 4000) + 1);
}
const numbers = [
  0,1,2,3,4,5,6,7,8,9
];
let separators = [
  '-',
  '_',
  ...numbers,
];
function get_sep(){
  return separators[rand_num() % separators.length];
}
function random_decision(){
  return rand_num() > rand_num();
}
async function generate(){
  let guts = await fs.readFileSync('./words.txt');
  guts = guts.toString();
  let lines = guts.split("\n");
  const len = lines.length;

  let word_a = lines[rand_index(len)];
  let word_b = lines[rand_index(len)];
  let sep = get_sep();
  if(random_decision()){
    word_b = '';
  }
  if(random_decision()){
    sep = '';
  }
  let suffix = rand_num();
  if(random_decision()){
    suffix = '';
  }
  return `${word_a}${sep}${word_b}${suffix}`;
}
(async () => {
  let u = await generate();
  u = u.toLowerCase();
  u = u.replace(/['"]+/g,'');
  console.log(u);
})();
