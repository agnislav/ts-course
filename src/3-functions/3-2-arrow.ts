
// arrow
const details = {
  name: 'Pimienta',
  sayMyName: function() {setTimeout(function() {console.log('classic', this.name)}, 0)},
  sayMyCorrectName: function() {setTimeout(() => console.log('arrow', this.name), 0)},
}

details.sayMyName();
details.sayMyCorrectName();
