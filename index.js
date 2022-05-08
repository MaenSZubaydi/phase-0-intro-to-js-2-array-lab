
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(element){
    cats.push(element);
}

destructivelyAppendCat('Ralph');

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyPrependCat(element){
    cats.unshift(element);
}

destructivelyPrependCat('Bob');


cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveLastCat(){
    cats.pop();
}
destructivelyRemoveLastCat();


cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveFirstCat(){
    cats.shift();
}

destructivelyRemoveFirstCat();

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');


function appendCat(element){
    return [...cats, element];
}

const copyCats1 = appendCat("Broom");

function prependCat(element){
    return [element, ...cats];
}

const copyCats2 = prependCat("Arnold");

function removeLastCat(){
    return cats.slice(0,-1);
}

const copyCats3 = removeLastCat();

function removeFirstCat(){
    return cats.slice(1);
}

removeFirstCat();


