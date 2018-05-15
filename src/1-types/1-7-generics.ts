function showMe(magic: string): string {
  return magic;
}

function showMeReal<T>(magic: T): T {
  return magic;
}

function showMeRealOne<T>(magic: T[]): T {
  return magic[0];
}

interface Magic {
  id: string;
}

function tellMe<T extends Magic>(magic: T): T {
  console.log(magic.id);
  return magic;
}

interface Booking {
  basketId: string;
  airlineReference: string;
}

const ref: keyof Booking = 'basketId';
const basketId: Booking['basketId'] = 'aaa';

function valueOf<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

function pluck<T, K extends keyof T>(object: T, names: K[]): Array<T[K]> {
  return names.map(name => object[name]);
}