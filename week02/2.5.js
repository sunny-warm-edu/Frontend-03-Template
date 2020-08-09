/**
 * 第2周 5、状态机｜不使用状态机处理字符串（三）
 */

//练习1 不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“abcdef”
function match(pString, pStringToMatch){
  let arrIsLastCharMatched = [];
  const initArr = () => {
    for(let i = 0; i < pStringToMatch.length - 1; i ++){
      arrIsLastCharMatched[i] = false;
    }
  };
  initArr();
  
  for(let cc of pString){
    if(arrIsLastCharMatched[pStringToMatch.length - 2] //前面5个字符是abcde
      && cc === pStringToMatch.charAt(pStringToMatch.length - 1)){//当前字符是f
      return true;
    }

    for(let i = pStringToMatch.length - 2; i >= 0; i --){//从e、d、c、b、a依次判断：前面的字符是否匹配，当前的字符是否匹配
      //console.log('cc, pStringToMatch.at(i), i, arr:', cc, pStringToMatch.charAt(i), i, arrIsLastCharMatched);
      if(i === 0){
        if(arrIsLastCharMatched[1] === false){
          arrIsLastCharMatched[0] = cc === pStringToMatch.charAt(i);
        }
        break;
      }
      if(arrIsLastCharMatched[i - 1] === false){
        continue;
      }
      else {
        if(cc === pStringToMatch.charAt(i)){
          arrIsLastCharMatched[i] = true;
        } else {
          initArr();
        }
        break;
      }
    }
  }

  return false;
}

console.log(match('222abcde22', 'abcdef'));
console.log(match('222abcde22f', 'abcdef'));
console.log(match('abcdef', 'abcdef'));
console.log(match('##abcdef##', 'abcdef'));
console.log(match('##abcdefgh##', 'abcdefgh'));
console.log(match('##abceeesssaa##', 'eesssa')); //算法不能处理这种情况的匹配，存在问题待完善
/*
输出：
false
false
true
true
true
*/

function match2(str){
  let foundA = false;
  let foundB = false;
  let foundC = false;
  let foundD = false;
  let foundE = false;

  for(let cc of str){
    if(cc === 'a'){
      foundA = true;
    } else if(foundA && cc === 'b')
      foundB = true;
    else if(foundB && cc === 'c'){
      foundC = true;
    } else if(foundC && cc === 'd'){
      foundD = true;
    } else if(foundD && cc === 'e'){
      foundE = true;
    } else if(foundE && cc === 'f'){
      return true;
    }
    else{
      foundA = false;
      foundB = false;
      foundC = false;
      foundD = false;
      foundE = false;
    }
  }

  return false;
}

console.log(match2('222abcde22'));
console.log(match2('222abcde22f'));
console.log(match2('abcdef'));
console.log(match2('##abcdef##'));
//console.log(match('##abceeesssaa##', 'eesssa'));