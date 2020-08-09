/**
 * 第2周 4、状态机｜不使用状态机处理字符串（二）
 */

//练习一 不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“ab”
function matchAB(pString){
  let isLastCharMatchA = false;//记录每次for循环的上一次循环中字符是否为a
  for(let cc of pString){
    if(isLastCharMatchA && cc === 'b'){
      return true;
    }

    if(cc === 'a'){
      isLastCharMatchA = true;
    } else {
      isLastCharMatchA = false;
    }
  }
  return false;
}
console.log(matchAB('sab'))
console.log(matchAB('qaa'))
/*
输出：
true
false
*/

