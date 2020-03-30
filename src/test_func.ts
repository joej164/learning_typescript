const square = (x:number) => x * x;

console.log(square(4))


const minus = (a:number, b:number=undefined) => {
    if (b === undefined){
        return -a;
    }
    else {
        return a - b;
    }
}

console.log(minus(6))

function multiplier(factor: number) {
  return (some_number: number) => some_number * factor;
}

let twice = multiplier(3);
console.log(twice(5));


const min = (first:number, second: number) => {
    if (first > second) {
        return first
    }
    else{
        return second
    }
}

console.log(min(6,7))
console.log(min(7,7))
console.log(min(7,6))


const countBs = (Bs: string) => {
    return countChars(Bs, "B");
}

const countChars = (textToCount:string, toFind: string) => {
    let cnt:number;
    let numOfChars:number = 0; 

    for(cnt=0; cnt < textToCount.length; ++cnt){
        if(textToCount[cnt] == toFind){
            numOfChars++;
        }
    }
    return numOfChars
}

console.log(countBs("BBcBBB_____BBBBBBBBBB"))