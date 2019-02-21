//Exercise #1

function getAge (year) {
    let age = 2019 - year;
    return age;
}

let remainingYrs = yearsUntilRetirement();
let yearsUntilRetirement = function () {
    const retirementAge = 65;
    return retirementAge - age;
}

//Exercise #2
function test() {
    let x = 1;
    if (x !== 2) {
        let x = 2;
    }
    return x;
}

//Exercise #3
let a = 'aaa';
first();
function first() {
    let b = 'bbb';
    return second();

    function second() { 
        let c = 'ccc';
        return third();

    }
}

function third() {
    return c;
}

//Exercise #4
//This problem doesn't contain test specs, 
//but think about what this function would log to the console for a few minutes! :) 
//to test it, run node index.js in your console.
let txt = 'outside';
function showTxt(){
    console.log(txt);
    let txt = 'inside';
}
showTxt();


