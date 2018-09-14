const Cart = require('./cart.js');

const keranjang = new Cart();

keranjang.tambahProduk("Topi Putih", 2);

keranjang.tambahProduk("Kemeja Hitam", 3);

keranjang.tambahProduk("Sepatu Merah", 1);
keranjang.tambahProduk("Sepatu Merah", 4);
keranjang.tambahProduk("Sepatu Merah", 2);

keranjang.hapusProduk("Kemeja Hitam");

keranjang.hapusProduk("Baju Hijau");

keranjang.tampilkanCart();