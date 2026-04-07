export const validate = (schema) => (req, res, next) => {
	try {
		// parse() compara req.body con el schema de Zod
		schema.parse(req.body);
		next(); // Si todo está bien, pasa al siguiente paso
	} catch (error) {
		// Si falla, devuelve un error 400 detallado
		return res.status(400).json({
			error: error.errors.map((e) => ({
				campo: e.path[0],
				mensaje: e.message,
			})),
		});
	}
};
