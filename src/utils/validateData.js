function validateData(request, response, next) {
    const { marca, modelo, tipo, fecha_lanzamiento, precio } = request.body;

    if (!marca) {
        return response.status(422).json({ "message": "marca es obligatorio" });
    } else if (typeof marca !== 'string') {
        return response.status(422).json({ "message": "marca debe estar en texto" });
    }

    if (!modelo) {
        return response.status(422).json({ "message": "modelo es obligatorio" });
    } else if (typeof modelo !== 'string') {
        return response.status(422).json({ "message": "modelo debe estar en texto" });
    }

    if (!tipo) {
        return response.status(422).json({ "message": "tipo es obligatorio" });
    } else if (typeof tipo !== 'string') {
        return response.status(422).json({ "message": "tipo debe estar en texto" });
    }

    if (!fecha_lanzamiento) {
        return response.status(422).json({ "message": "fecha_lanzamiento es obligatorio" });
    } else if (typeof fecha_lanzamiento !== 'number') {
        return response.status(422).json({ "message": "fecha_lanzamiento debe estar en numero" });
    }

    if (!precio) {
        return response.status(422).json({ "message": "precio es obligatorio" });
    } else if (typeof precio !== 'number') {
        return response.status(422).json({ "message": "precio debe estar en numero" });
    }

    next();
}

module.exports = validateData;