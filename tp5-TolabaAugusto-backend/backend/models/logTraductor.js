const mongoose = require('mongoose');
const { Schema } = mongoose;
const LogTraductorSchema = new Schema
({
    textoOrigen: { type: String, required: true },
    idiomaOrigen: { type: String, required: true },
    textoDestino: { type: String, required: true },
    idiomaDestino: { type: String, required: true }
})
module.exports = mongoose.models.LogTraductor || mongoose.model('LogTraductor', LogTraductorSchema);