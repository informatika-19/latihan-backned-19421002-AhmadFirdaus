const kegiatanModel = require('../model/kegiatan')
exports.create = (data) =>
new Promise((resolve, reject) => {
    kegiatanModel.create(data)
    .then(()=>resolve({
        status:true,
        pesan:'Berhasil Input Kegiatan'
    })).catch(()=> reject({
        status = false,
        pesan: 'Gagal Input Kegiatan'
    }))
})