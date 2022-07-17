const countLetter = word =>{
return word.length;
};
//Предположение, что слово не просто строка и не содержит цифр и 
//спец.символов. Иначе:
//return word.match(/[a-zA-Zа-яА-Я]/g).length
