const LogTraductor = require('../models/logTraductor');
const logTraductorCtrl = {}

logTraductorCtrl.getLogsTraductor = async (req, res) => {
    var logsTraductor = await LogTraductor.find();
    //var logsTraductor = await LogTraductor.find().populate("");
    res.json(logsTraductor);
}

logTraductorCtrl.createLogTraductor = async (req, res) => {
    var logTraductor = new LogTraductor(req.body);
    console.log(req.body);
    try {
        await logTraductor.save();
        res.json({
            'status': '1',
            'msg': 'log guardado.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

logTraductorCtrl.getLogTraductor = async (req, res) => {
    const logTraductor = await LogTraductor.findById(req.params.id);
    res.json(logTraductor);
}
logTraductorCtrl.editLogTraductor = async (req, res) => {
    const vlogTraductor = new LogTraductor(req.body);
    try {
        await LogTraductor.updateOne({_id: req.body._id}, vlogTraductor);
        res.json({
            'status': '1',
            'msg': 'log updated'
        })
    } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
    }
}
logTraductorCtrl.deleteLogTraductor = async (req, res)=>{
 try {
    await LogTraductor.deleteOne({_id: req.params.id});
    res.json({
        status: '1',
        msg: 'log removed'
 })
 } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
 }
}

module.exports = logTraductorCtrl;