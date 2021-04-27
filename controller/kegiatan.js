const { Promise, isValidObjectId } = require('mongoose')
const kegiatanModel = require('../model/kegiatan')
exports.create = (data) =>
new Promise((resolve, reject) => {
    kegiatanModel.create()
    .then(result => {
        resolve({
        status:true,
        pesan:'Berhasil Input Kegiatan',
        data: result})
    }).catch(() => reject({
        status = false,
        pesan: 'Gagal Input Kegiatan',
        data: []
    }))
})

exports.showDataById = (id) =>
new Promise((resolve, reject) => {
    kegiatanModel.findOne({
    _id: Object(id)
}).then(result => { 
    resolve({
        status: true,
        pesan: 'berhasil menampilkan data',
        data: result
    })
}).catch(() => reject({
    status: false,
    pesan: 'gagal menampilkan data',
    data: null
}))
})

exports.Update = (id, data) =>
new Promise((resolve, reject)=>{
    kegiatanModel.updateOne({
        _id: ObjectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'berhasil mengubah data'
    })).catch(()=> reject({
        status: false,
        pesan: 'gagal mengubah data'
    }))
})

exports.delete = (id) =>
new Promise((resolve, reject) => {
    kegiatanModel.deleteOne({
        _id: ObjectId(id)
    }).then(() => resolve({
        status: true,
        pesan: 'berhasil menghapus data'
    })).catch(() => reject({
        status: false,
        pesan: 'gagal menghapus data'
    }))
    })