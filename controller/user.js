const userModel = require('../model/User')
const bcrypt = require('bcrypt')
const { findOne } = require('../model/User')
exports.register = (data) =>
    new Promise((resolve, reject) => {
// console.log(data)
userModel.findOne({
    username: data.username
}).then(addUser => {
    if (addUser) {
        resolve({
        status : false,
        pesan: 'Username Telah Terdaftar'
    })
}else{
    bcrypt.hash (data.password, 10, (err, hash) =>{
        data.password = hash
        usermodel.create(data)
.then(() => {
//console.log('berhasil Insert')
resolve({
    status: true,
    pesan: 'Berhasil Insert Data User'
})
}).catch(() => {
//console.log(e)
    //console.log('gagal Insert')
    reject({
        status: false,
        pesan: 'Gagal Insert Data User'
    })
})
    })
}
})

})

exports.Login = (data) =>
new Promise((resolve, reject) =>{
    userModel:findOne({
        username:data.username
    }).then(user =>{
        if (user) {
            if (bcrypt.compareSync(data.password, user.password)){
                resolve({
                    status:true,
                    pesan:'Berhasil Login'
                })
            }else{
                reject({
                    status:false,
                    pesan:'tidak berhasil login'
                })
            }
        }else{
            reject({
                status:false,
                pesan: 'Username Tidak Terdaftar'
            })
        }
    })
})