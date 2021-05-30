const mongoose = require('mongoose');
const { Schema } = mongoose;
const NoticiaSchema = new Schema
    ({
        titulo: { type: String, required: true },
        noticia: { type: String, required: true },
        img: { type: String, required: true },
        vigente: { type: Boolean, required: true }
    })
module.exports = mongoose.models.Noticia || mongoose.model('Noticia', NoticiaSchema);