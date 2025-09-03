const HotelView = {
    formatearRespuesta: (hotel) => {
        if (!hotel) {
            return JSON.stringify({
                status: "error",
                message: "Hotel no encontrado"
            })
        }

        return JSON.stringify({
            status: "success",
            data: hotel
        })
    }
}

module.exports = {
    HotelView
}