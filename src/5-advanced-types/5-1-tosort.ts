// union
function haceHoy(horas: number): number | string {
  const horasParaDia = 6;
  return horas > horasParaDia ? horasParaDia - horas : 'mañana';
}

// typeof guard (runtime!!!)

// short
function haceAlgoPeq(cosa: number | string) {
  if (typeof cosa === 'number') {
    
  } 
  if (typeof cosa === 'string') {

  }
}

// long
function isNumber(x: any): x is number {
  return typeof x === 'number';
}
function isString(x: any): x is string {
  return typeof x === 'string';
}

function haceAlgoLargo(cosa: number | string) {
  if (isNumber(cosa)) {
    
  } 
  if (isString(cosa)) {

  }
}

// type guard interfaceof

interface Bailar {
  vamos: Function;
}

class BailarEnEspana implements Bailar {
  vamos() {
    console.log('Salsa');
  }
}

class BailarEnUcrania implements Bailar {
  vamos() {
    console.log('Kozachok');
  }
}

function bailar(donde: BailarEnEspana | BailarEnUcrania) {
  if (donde instanceof BailarEnEspana) {

  }
}

// --strict null checks

let str: string; // let s: string | null | undefined;
str = 'aaa';
str = null;
str = undefined;

// TYPE ALIASES

type Age = number;
type Complex = Array<any> | Object | Function;

// LITERAL TYPES

type Market = 'tcuk' | 'necnl';
type UnhappyNumber = 6 | 13;

