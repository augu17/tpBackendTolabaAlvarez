const Noticia = require('../models/noticia');
const noticiaCtrl = {}


noticiaCtrl.getNoticias = async (req, res) => {
    var noticias = await Noticia.find();
    //var noticias = await Noticia.find().populate("");
    res.json(noticias);
}

noticiaCtrl.createNoticia = async (req, res) => {
    var noticia = new Noticia(req.body);
    console.log(req.body);
    try {
        await noticia.save();
        res.json({
            'status': '1',
            'msg': 'Noticia guardada.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

noticiaCtrl.getNoticia = async (req, res) => {
    const noticia = await Noticia.findById(req.params.id);
    res.json(noticia);
}
noticiaCtrl.editNoticia = async (req, res) => {
    const vnoticia = new Noticia(req.body);
    try {
        await Noticia.updateOne({_id: req.body._id}, vnoticia);
        res.json({
            'status': '1',
            'msg': 'Noticia updated'
        })
    } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
    }
}
noticiaCtrl.deleteNoticia = async (req, res)=>{
 try {
    await Noticia.deleteOne({_id: req.params.id});
    res.json({
        status: '1',
        msg: 'Noticia removed'
 })
 } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
 }
}

module.exports = noticiaCtrl;