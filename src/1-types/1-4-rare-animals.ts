// Any
let a: any;
a = 1;
a = 'sdf';
a = [1];
a = {id: {trueId: 'Malaga'}};

// void
function returnNothing(): void {
    console.log('hago nada');
}

// function returnSomething(): void {
//     console.log('trabajo mucho');
//     return true;
// }

// null, undefined
let n: null = undefined;
let u: undefined = null;
let s: string = null;

// never
function dontReturn(): never {
    throw new Event('Love me tender');
}
