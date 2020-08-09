/**
 * 第2周 7、状态机｜使用状态机处理字符串（二）
 */

//练习1 用状态机实现：字符串“abcabx”的解析
function match(str){
  let state = start;
  for(let c of str){
    state = state(c);
  }
  return state === end;
}

function start(c){
  if(c === 'a'){
    return foundA;
  }
  return start;
}

function end(c){
  return end;
}

function foundA(c){
  if(c === 'b'){
    return foundB;
  }
  return start(c);
}

function foundB(c){
  if(c === 'c'){
    return foundC;
  }
  return start(c);
}

function foundC(c){
  if(c === 'a'){
    return foundA2;
  }
  return start(c);
}

function foundA2(c){
  if(c === 'b'){
    return foundB2;
  }
  return start(c);
}
function foundB2(c){
  if(c === 'x'){
    return end;
  }
  if(c === 'c'){
    return foundC;
  }
  return start(c);  
}


console.log(match('abcabx'));
console.log(match('abcabcabx'));
console.log(match('ababcabx'));
console.log(match('abxabc'));
console.log(match('ababxabc'));
/*
true
true
true
false
false
*/

// // eeeab
// function match2(str){
//   let state = start2;
//   for(let c of str){
//     state = state(c)
//   }
//   return state === end2;
// }
// function start2(c){
//   if(c === 'e'){
//     return foundE1;
//   }
//   return start2;
// }
// function end2(c){
//   return end2;
// }
// function foundE1(c){
//   if(c === 'e'){
//     return foundE2;
//   }
//   return start2(c);
// }
// function foundE2(c){
//   if(c === 'e'){
//     return foundE3;
//   }
//   return start2(c);
// }
// function foundE3(c){
//   if(c === 'a'){
//     return foundAA;
//   }
//   if(c === 'e'){
//     return foundE3;
//   }
//   return start2(c);
// }
// function foundAA(c){
//   if(c === 'b'){
//     return end2;
//   }
//   return start2(c);
// }

// console.log(match2('eeabeeeeeab'))
