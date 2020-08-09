/**
 * 第2周 7、状态机｜使用状态机处理字符串（二）
 */

//练习2  作业：使用状态机完成”abababx”的处理。
function match(str){
  let state = start;
  for(let c of str){
    state = state(c);
  }
  return state === end;
}
function end(c){
  return end;
}
function start(c){
  if(c === 'a'){
    return foundA1;
  }
  return start;
}

function foundA1(c){
  if(c === 'b'){
    return foundB1;
  }
  if(c === 'a'){
    return foundA1;
  }
  return start(c);
}
function foundB1(c){
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
  if(c === 'a'){
    return foundA3;
  }
  return start(c);
}

function foundA3(c){
  if(c === 'b'){
    return foundB3;
  }
  return start(c);
}

function foundB3(c){
  if(c === 'x'){
    return end;
  }
  if(c === 'a'){
    return foundA3;
  }
  return start(c);
}

console.log(match('abababx'));
console.log(match('ababx'));
console.log(match('aaaaabababx'));
console.log(match('aaaaabababababx'));
/*
true
false
true
true
*/