
//Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
// let some:unknown;
// some = 'Text';
// let str: string;
// str = some;

// export {};


let some:unknown;
some = 'Text';
let str: string;

if (typeof some === 'string') {
  str = some;
}

export {};