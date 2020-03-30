let rangeOfNumbers = (start:number, end:number) => {
    let toReturn:number[] = [];
    let i:number;

    for(i=start; i <= end; i++){
        toReturn.push(i);
    }

    return toReturn
}

let sumOfNumbers = (numbers: number[]) => {
    let x:number = 0;
    let toReturn:number = 0;

    for(x of numbers){
        toReturn += x
    }

    return toReturn
}

let nums:number[] = rangeOfNumbers(1, 10)

console.log(sumOfNumbers(nums))



let reverseArray = (anArray:number[]) => {
    let toReturn:number[] = [];

    let x:number = anArray.length;

    for (x = anArray.length - 1; x >= 0; x--) {
        toReturn.push(anArray[x])
    }

    return toReturn
}

let reverseInPlace = (anArray:number[]) => {
    let temp:number;
    let front:number = 0;
    let end:number = anArray.length -1;

    while(front < end){
        temp = anArray[end];
        anArray[end] = anArray[front];
        anArray[front] = temp;
        front ++;
        end --;
    }
}

let reversed:number[] = reverseArray(rangeOfNumbers(1,10))
console.log(reversed)

console.log('**********************')
let inPlaceArray = rangeOfNumbers(7,13)
console.log(inPlaceArray)

reverseInPlace(inPlaceArray)

console.log(inPlaceArray)
