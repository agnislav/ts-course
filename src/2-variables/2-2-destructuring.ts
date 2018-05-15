// ARRAY DESTRUCTURING
let cityInfo: [string, string] = ['Málaga', 'España'];
let [country, city] = cityInfo;
[country, city] = [city, country];

function printCity([city, country]: [string, string]) {
    console.log(`city: ${city}`);
    console.log(`country: ${country}`);
}
printCity(cityInfo);

// OBJECT DESTRUCTURING
let malagaInfo = {
    ciudad: 'Málaga',
    país: 'España',
};

let {ciudad, país} = malagaInfo;
function printCiudad(ciudadInfo: { ciudad: string, país: string }) {
    let {ciudad: city, país: country} = ciudadInfo;
    console.log(`City: ${city}, country: ${country}`);
}

function printCiudadEspanol(ciudadInfo: { ciudad: string, país?: string }) {
    let { ciudad, país = 'España' } = ciudadInfo;
}

function betterPrintCiudadEspanol({ciudad, país = 'España'}: { ciudad: string, país?: string }) {
    console.log(ciudad, país);
}

betterPrintCiudadEspanol({ciudad: 'Kyiv'});
