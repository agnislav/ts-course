function named() {
  //
}

const anonymous = function() {
  //
} 

function lessExplicit(age: number, name: string) : boolean {
  return true;
}

const explicit: (age: number, name: string) => boolean =
  function(x: number, y: string): boolean {return true};

const explicitInferring: (age: number, name: string) => boolean =
function(x, y) {return true};

function optional(city: string, country?: string) {}
// function optionalWrong(country?: string, city: string) {}

function defaultValue(city: string, country = 'Ukraine') {}

function rest(name: string, ...address: string[]) {}
