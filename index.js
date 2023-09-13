let data=process.argv

let opr=data[2];
let a=data[3];
let b=data[4];

switch(opr){
    case "add":
        console.log(Number(a)+Number(b));
        break;
    case "sub":
            console.log(Number(a)-Number(b));
            break;
    case "mul":
                console.log(Number(a)*Number(b));
                break;
    case "div":
                    console.log(Number(a)/Number(b));
                    break;
    case "modu":
                console.log(Number(a)%Number(b));
                break;
}