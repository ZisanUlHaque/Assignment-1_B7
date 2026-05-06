//Problem 1:

function filterEvenNumbers(numbers : number[]) : number[]{
    return numbers.filter(num => num % 2 === 0);
}

//Problem 2:

function reverseString(input : string) : string{
     return input.split(" ").reverse().join(" ");
}

//Problem  3:

type StringOrNumber = (number | string);

const checkType = (input : StringOrNumber) => {
    if(typeof input === "string"){
        return "String";
    }else{
        return "Number";
    }
}


