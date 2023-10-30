/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  Сделайте переменную, которая может принимать или строку или число.
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
  Cделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
*/

let union: string | number;

function combine(param1: number | string, param2: number | string) {
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}



let literal: 'enable' | 'disable';

//Это можно использовать для переключателя, напишем функцию которая либо здоровается, либо прощается с пользователем.

function greeting (action: 'hello' | 'bye') {
  if (action === 'hello') {
    console.log('Hello user!');
  } else {
    console.log('Bye user!');
  }
}
