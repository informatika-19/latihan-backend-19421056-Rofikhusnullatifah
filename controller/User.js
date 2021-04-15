const userModel = require('../model/User')

exports.register =(data) =>
new Promise((resolve, reject) => {
    userModel.create(data)
    .then(() => {
        resolve({
            sukses:true,
            pesan: 'Berhasil Register'
        })
    }).catch(() => {
        reject({
            sukses : false,
            pesan : 'Gagal Register'
})
    })
})