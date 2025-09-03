const {HotelModel} = require('../models/hotelModel');
const {HotelView} = require('../views/hotelView');

const HotelController = {
    manejarPeticion: (id) => {

        const hotel = HotelModel.getHotelByID(id);

        return HotelView.formatearRespuesta(hotel)
    }
}

module.exports = {
    HotelController
}