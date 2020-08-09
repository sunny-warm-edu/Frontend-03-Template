/**
 * 第2周 3、状态机｜不使用状态机处理字符串（一）
 */

//练习1 在一个字符串中，找到字符'a'（的位置，第一个位置是0）
function getCharPosition(pString, pCharToFind){
  if(!pString || !pString.length || !pCharToFind)
    return -1;
  
  for(let i = 0; i < pString.length; i ++){
    if(pString.charAt(i) === pCharToFind){
      return i;
    }
  }

  return -1;
}

console.log( getCharPosition('012a56', 'a') );
console.log( getCharPosition('012456', 'a') );
console.log( getCharPosition('a12456', 'a') );
console.log( getCharPosition('01234a', 'a') );
console.log( getCharPosition('01aa45', 'a') );
/*
输出：
3
-1
0
5
2
*/

function matchA(pString){
  for(let cc of pString){
    if(cc === 'a') return true;
  }
  return false;
}
console.log(matchA('sss'))
console.log(matchA('aaa'))
