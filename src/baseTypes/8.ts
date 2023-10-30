/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
  Создайте тип "Gender", используя union type,
  который может содержать значения "male", "female". Создайте переменную myGender этого типа.
*/
type Gender = "male" | "female";

const myGender: Gender = "male"; // Присвоение одного из возможных значений


export {};
