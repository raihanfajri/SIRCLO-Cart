module.exports = class Cart {
    constructor(){
        this.produk = [];
    }

    tambahProduk(kode, qty){
        let trimKode = kode.trim()
        if(trimKode.length == 0 || typeof qty != 'number' || qty <=0){
            console.log("Error : Kode dan kuantitas tidak valid!");
        }
        if(this.produk.hasOwnProperty(kode)){
            this.produk[kode].qty += qty;
        }else{
            this.produk[kode] = {
                nama : kode,
                qty  : qty
            }
        }
    }

    hapusProduk(kode){
        if(this.produk.hasOwnProperty(kode)){
            delete this.produk[kode]
        }else{
            console.log("Error : Kode produk " + kode + " tidak ditemukan!");
        }
    }

    tampilkanCart(){
        for(let item in this.produk){
            console.log(this.produk[item].nama + ' (' + this.produk[item].qty + ')');
        }
    }
}