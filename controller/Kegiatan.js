const kegiatanModel = require ('../model/kegiatan')

exports.create = (data) =>
new Promise((resolve, reject) =>{

// fungsi untuk menyimpan kegiatan
kegiatanModel.create(data)
.then(() => resolve ({
    status : true,
    pesan: 'berhasil input kegiatan'
})).catch (() => reject({
    status : false,
    pesan: 'gagal input kegiatan'
}))

})