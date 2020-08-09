/**
 * 第2周 6、状态机｜使用状态机处理字符串（一）
 */

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
  if(c === 'd'){
    return foundD;
  }
  return start(c);
}

function foundD(c){
  if(c === 'e'){
    return foundE;
  }
  return start(c);
}

function foundE(c){
  if(c === 'f'){
    return end;
  }
  return start(c);
}


console.log(match('222abcde22'));
console.log(match('222abcde22f'));
console.log(match('abcdef'));
console.log(match('##abcdef##'));
console.log(match('ababcdef'));//false
//console.log(match('##abceeesssaa##', 'eesssa'));