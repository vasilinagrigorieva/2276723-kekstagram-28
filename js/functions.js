//Функция для проверки длины строки
const isLessOrEqual = (string, maxlength) => string.length <= maxlength;

//вызов функции
isLessOrEqual('проверяемая строка', 20);
isLessOrEqual('проверяемая строка', 18);
isLessOrEqual('проверяемая строка', 10);

//Функция для проверки строки на палиндром
const isPalindrom = (string) => {
  let reverseString = '';
  const tempString = string.toLowerCase();
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};

//вызов функции
isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');

//Функция для извлечения цифр из строки
const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

//вызов функции
extractNumber('2023 год');
extractNumber('ECMAScript 2022');
extractNumber('агент 007');
extractNumber('a я томат');

//Функция, работающая как padStart
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  const tempPad = pad.slice(0, actualPad % pad.length);
  const tempRepeat = pad.repeat(actualPad / pad.length);
  return tempPad + tempRepeat + string;
};

//вызов функции
myPadStart('1', 2, '0');
myPadStart('1', 4, '0');
myPadStart('q', 4, 'werty');
myPadStart('q', 4, 'we');
myPadStart('qwerty', 4, '0');
