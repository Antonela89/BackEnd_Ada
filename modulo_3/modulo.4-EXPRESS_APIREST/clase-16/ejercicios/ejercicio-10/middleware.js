// middleware para verificar token
function autenthicationToken(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        return next(); // Sale del middleware y va a la ruta
    }

    return res.status(403).json({error: 'No autorizado.'})
}

module.exports = autenthicationToken;