//problem 1

let getAge = function (year){
    function calculate () {
        let age = 2019 - year;
        
    }
    return age; 
}

//Function Requirement: Must use age returned from getAge

function calculateYearsUntilRetirement () {
    const retirementAge = 65;
    return retirementAge - age;
}

//problem 2
let a = 'aaa';
first();
function first() {
    let b = 'bbb';
    second();

    function second() { 
        let c = 'ccc';
        third();
    }
}

function third () {
    let d = 'ddd';
    return c;
}

//problem 3 
//Not sure how to write the test spec with this one, but I think its a fun problem.
let txt = 'outside';
function showTxt(){
    console.log(text);
    let txt = 'inside';
}
showTxt();