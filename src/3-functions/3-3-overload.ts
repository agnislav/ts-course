
// overload
function pleaseDo(a: string | number): Array<string|number> {
  console.log(typeof a);
  if (typeof a === 'string') {
    console.log('string');
    return [a];
  } else if (typeof a === 'number') {
    console.log('number');
    return [a];
  }
}

pleaseDo('aaa');
pleaseDo(123);

function pleaseHace(a: string): string[];
function pleaseHace(a: number): number[];
function pleaseHace(a) {
  console.log(typeof a);
  if (typeof a === 'string') {
    console.log('string');
    return [a];
  } else if (typeof a === 'number') {
    console.log('number');
    return [a];
  }
}