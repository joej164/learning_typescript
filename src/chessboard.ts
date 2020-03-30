// My solution to eloquentjavascript.net chapter 2 chessboard program

let space_first:string = "";
let hash_first:string = "";

let user_input:number = 50;

let i:number;

for(i=0; i<user_input; ++i){
    if(i%2 == 0){
        space_first = space_first + " ";
        hash_first = hash_first + "#";
    }
    else{
        space_first = space_first + "#";
        hash_first = hash_first + " ";
    }
}

for (i=0; i<user_input; ++i){
    if(i%2 == 0){
        console.log(space_first)
    }
    else{
        console.log(hash_first)
    }
}