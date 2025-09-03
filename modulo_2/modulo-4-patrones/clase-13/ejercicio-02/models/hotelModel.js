const fs = require('fs');
const path = require('path');

const rutaBBDD = path.join(__dirname, '../data/hotels.json');

// console.log(rutaBBDD);

const HotelModel = {
    getHotelByID: (id) => {

        const listado = fs.readFileSync(rutaBBDD);

        const listaHoteles = JSON.parse(listado);

        return listaHoteles.find(hotel => hotel.id === id) || null;
    }
}

module.exports = {
    HotelModel
}
