const defaultCityInfo = { city: 'Málaga', country: 'España'};
const sevillaCityInfo = {...defaultCityInfo, city: 'Sevilla'};

const arr1 = ['wants', 'to'];
const arr2 = ['forever'];
const song = ['who', ...arr1, 'live', ...arr2];
console.log(song);
