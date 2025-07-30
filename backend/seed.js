require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB bağlantısı başarılı"))
  .catch(err => console.error("MongoDB bağlantı hatası:", err));

const productSchema = new mongoose.Schema({
  category: String,
  subCategory: String,
  brand: String,
  name: String,
  priceNew: Number,
  priceOld: Number,
  discount: String,
  save: Number,
  image: String,
  url: String,
});

const Product = mongoose.model('Product', productSchema);

const products = [
  // TELEFONLAR (category: "elektronik", subCategory: "cep telefonları") //açıklamalar başta buraya eklendi sonrasında mongoDB den manuel olarak tamamen içeriği değiştirildi 
  { category: "elektronik", subCategory: "cep telefonları", brand: "Samsung", name: "Galaxy S22 Ultra", priceNew: "59413", priceOld: "59613", discount: "56%", save: 42000, image: "/img/smartsphones/image1.png", url: "/product/1" , description: "Samsung Galaxy S22 Ultra, 108 MP kamera, 5.000 mAh batarya ve S Pen desteğiyle üst düzey bir akıllı telefondur." },
  { category: "elektronik", subCategory: "cep telefonları", brand: "Samsung", name: "Galaxy M13 (4GB | 64 GB)", priceNew: "10695", priceOld: "--", discount: "--", save: 4500, image: "/img/smartsphones/image2.png", url: "/product/2" , description: "Bu model, 7.0 inç büyüklüğünde FHD+ LCD ekrana ve 60 Hz yenileme hızına sahip olup, 64 GB dahili hafıza ve 4 GB RAM kapasitesi sunar. 5000 mAh bataryası 10-20 W şarj desteği ile Type-C girişi üzerinden şarj edilebilir. 20 MP üzeri çözünürlüğe sahip arka kamerası flaş destekliyken, ön kamerası 14-20 MP arasında çözünürlüğe sahiptir fakat ön kamera flaşı bulunmamaktadır. 4.5G mobil bağlantı hızına sahip olan cihazda yüz tanıma, suya/toza dayanıklılık özellikleri yer almamaktadır. Samsung Türkiye garantisiyle sunulmaktadır."},
  { category: "elektronik", subCategory: "cep telefonları", brand: "Samsung", name: "Galaxy M33 (4GB | 64 GB)", priceNew: "15499", priceOld: "--", discount: "--", save: 8000, image: "/img/smartsphones/image3.png", url: "/product/3" ,  description: "4 - 4.5 inç büyüklüğünde LCD ekranı HD+ çözünürlük sunan bu model, SD ekran teknolojisine sahiptir. Cihazda 128 GB dahili hafıza ve 6 GB RAM kapasitesi bulunur. 5000 mAh bataryası, 10-20 W şarj desteğiyle USB Type-C girişi üzerinden şarj edilebilir. 5 MP çözünürlüğünde ön ve arka kamera sunan cihazda ana kamera flaşı yer alırken, ön kamera flaşı bulunmamaktadır. Yüz tanıma ve suya/toza dayanıklılık özellikleri yoktur. 4.5G mobil bağlantı hızına sahiptir ve Resmi Distribütör garantisi ile sunulmaktadır."},
  { category: "elektronik", subCategory: "cep telefonları", brand: "Samsung", name: "Galaxy M53 (4GB | 64 GB)", priceNew: "6500", priceOld: "7500", discount: "13%", save: 9000, image: "/img/smartsphones/image4.png", url: "/product/4", description: "Samsung Galaxy M53 5G, 6.7 inç Super AMOLED FHD+ ekranı ve 120 Hz yenileme hızıyla akıcı bir görsel deneyim sunar. 108 MP dörtlü arka kamera sistemi ve 32 MP ön kamerası sayesinde fotoğraf ve video çekimlerinde üst düzey performans sağlar. 5000 mAh batarya kapasitesi ve 25W hızlı şarj desteğiyle uzun kullanım sunar. MediaTek Dimensity 900 işlemcisi, 6 GB RAM ve 128 GB depolama ile güçlü bir donanım yapısına sahiptir. Cihaz 5G, parmak izi okuyucu, NFC ve Dolby Atmos destekli mono hoparlör gibi birçok gelişmiş özellikle donatılmıştır. Android 12 ve Samsung One UI 4 arayüzüyle kutudan çıkar. Suya ve toza dayanıklılığı bulunmamakla birlikte, çift SIM ve microSD kart desteği sunar."},
  { category: "elektronik", subCategory: "cep telefonları", brand: "Samsung", name: "Galaxy S22 Ultra 5G", priceNew: "29099", priceOld: "29399", discount: "--", save: 18000, image: "/img/smartsphones/image5.png", url: "/product/5" , description: "Dahili Hafıza: 128 GB, Kozmetik Durum: C seviye - İyi, Garanti Süresi: 1 Yıl, Garanti Tipi: Yenilenmiş Ürün (12 Ay Garanti), Renk: Yeşil, RAM Kapasitesi: Yok, Cep Telefonu Modeli: Samsung Galaxy S22 Ultra, Özellik: Giyilebilir"},
  { category: "elektronik", subCategory: "cep telefonları", brand: "Samsung", name: "Galaxy S21 FE", priceNew: "17934", priceOld: "--", discount: "--", save: 25000, image: "/img/smartsphones/imageW6.jpg", url: "/product/6", description: "Ön Kamera Çözünürlüğü: 20 - 40 MP, Garanti Tipi: Samsung TR Garantili, Kamera Çözünürlüğü: 10 - 15 MP, Dahili Hafıza: 128 GB, RAM Kapasitesi: 8 GB, Pil Gücü (mAh): 4500, Mobil Bağlantı Hızı: 5G, Cep Telefonu Modeli: Samsung Galaxy S21, Suya/Toza Dayanıklılık: Var, Yüz Tanıma: Var, Ana Kamera Flaş: Var, Batarya Kapasitesi Aralığı: 4500-5000 mAh, Ekran Teknolojisi: FHD+, Dokunmatik Ekran: Var, Ön Kamera Flaş: Var, Şarj Hızı: 20-40 W, Ekran Boyutu: 6 inç ve üstü, Şarj Girişi: USB Type-C, Ekran Boyut Aralığı: 6 - 6.5, Ekran Yenileme Hızı: 120 H"},
  { category: "elektronik", subCategory: "cep telefonları", brand: "Samsung", name: "Galaxy A73", priceNew: "26999", priceOld: "--", discount: "--", save: 17000, image: "/img/smartsphones/image7.png", url: "/product/7" , description:"Samsung Galaxy modelinde 32 MP ön kamera çözünürlüğü bulunur. Garanti tipi resmi distribütör garantilidir. 128 GB dahili hafızaya ve 8 GB RAM kapasitesine sahiptir. 5.000 mAh pil gücü ile güçlü bir batarya sunar. 5G mobil bağlantı hızını destekler. Yüz tanıma ve ön kamera flaş özellikleri bu modelde bulunmazken, ana kamera flaşı da mevcut değildir. Ekran teknolojisi FHD olup, ekran cinsi PLS’tir. Batarya kapasitesi 5.000-6.000 mAh aralığındadır. Cihaz, suya ve toza dayanıklıdır. Dokunmatik ekran desteği vardır. Şarj hızı 20-40 W arasında değişmektedir. Ekran boyutu 4 - 4,5 inç olup, çözünürlüğü FHD+ seviyesindedir. USB Type-C şarj girişine sahiptir. Ekran boyutu aralığı ise 7 inç ve üzeri olarak belirtilmiştir. Arka kamera çözünürlüğü 5 MP ve altıdır." },
  { category: "elektronik", subCategory: "cep telefonları", brand: "Samsung", name: "Galaxy A53", priceNew: "10919", priceOld: "--", discount: "--", save: 14000, image: "/img/smartsphones/image8.png", url: "/product/8" , description:" Samsung Galaxy A53 modelinde 128 GB dahili hafıza bulunur. Cihazın kozmetik durumu A seviye olup, mükemmel durumdadır. 1 yıl garantilidir ve garanti tipi yenilenmiş ürün (12 ay garanti) şeklindedir. Ana kamera çözünürlüğü 40 - 60 MP aralığındadır.Renk seçeneği siyahtır. Ekran boyutu 6,5 inçtir. RAM kapasitesi belirtilmemiş olup “Yok” olarak belirtilmiştir."},
  { category: "elektronik", subCategory: "cep telefonları", brand: "Samsung", name: "Galaxy Z Fold 4", priceNew: "33799", priceOld: "--", discount: "--", save: 30000, image: "/img/smartsphones/image9.png", url: "/product/9" , description: "Samsung Galaxy Z Fold 4 modelinde 256 GB dahili hafıza bulunur. C seviyesi kozmetik durumu ile iyi durumdadır. Cihaz 1 yıl garantilidir ve garanti tipi yenilenmiş ürün (12 ay garanti) şeklindedir. Ana kamera çözünürlük aralığı 40 - 60 MP'dir. Renk seçeneği gri renktir. Ekran boyutu 6,71 inçtir. RAM kapasitesi 8 GB'dir."},
  { category: "elektronik", subCategory: "cep telefonları", brand: "Samsung", name: "Galaxy Z Flip 4", priceNew: 84999, priceOld: 99999, discount: "15%", save: 15000, image: "/img/smartsphones/image10.png", url: "/product/10" },
  { category: "elektronik", subCategory: "cep telefonları", brand: "Apple", name: "iPhone 14 Pro", priceNew: 20000, priceOld: 23000, discount: "13%", save: 3000, image: "/img/smartsphones/image11.png", url: "/product/11" },
  { category: "elektronik", subCategory: "cep telefonları", brand: "Samsung", name: "Samsung Galaxy S23", priceNew: 18000, priceOld: 21000, discount: "14%", save: 3000, image: "/img/smartsphones/image12.png", url: "/product/12" },
  { category: "elektronik", subCategory: "cep telefonları", brand: "Xiaomi", name: "Xiaomi Redmi Note 12", priceNew: 8000, priceOld: 9000, discount: "11%", save: 1000, image: "/img/smartsphones/image13.png", url: "/product/13" },
  { category: "elektronik", subCategory: "cep telefonları", brand: "OnePlus", name: "OnePlus 11", priceNew: 11000, priceOld: 13000, discount: "15%", save: 2000, image: "/img/smartsphones/image14.png", url: "/product/14" },
  { category: "elektronik", subCategory: "cep telefonları", brand: "Google", name: "Iphone 16", priceNew: "59999", priceOld: "60000", discount: "14%", save: 2000, image: "/img/smartsphones/image14.png", url: "/product/15" },

  // BİLGİSAYAR ve DİZÜSTÜ BİLGİSAYARLAR
  { category: "elektronik", subCategory: "bilgisayarlar ve dizüstü bilgisayarlar", brand: "Dell", name: "Dell Inspiron 15", priceNew: 8500, priceOld: 10000, discount: "15%", save: 1500, image: "/img/laptops/laptopimg1.png", url: "/product/201" },
  { category: "elektronik", subCategory: "bilgisayarlar ve dizüstü bilgisayarlar", brand: "Apple", name: "MacBook Pro 14\"", priceNew: 25000, priceOld: 27000, discount: "7%", save: 2000, image: "/img/electronics/laptops/macbookpro14.png", url: "/product/202" },
  { category: "elektronik", subCategory: "bilgisayarlar ve dizüstü bilgisayarlar", brand: "Lenovo", name: "Lenovo ThinkPad X1", priceNew: 15000, priceOld: 18000, discount: "17%", save: 3000, image: "/img/electronics/laptops/thinkpad-x1.png", url: "/product/203" },
  { category: "elektronik", subCategory: "bilgisayarlar ve dizüstü bilgisayarlar", brand: "HP", name: "HP Pavilion 14", priceNew: 9000, priceOld: 11000, discount: "18%", save: 2000, image: "/img/electronics/laptops/hp-pavilion14.png", url: "/product/204" },
  { category: "elektronik", subCategory: "bilgisayarlar ve dizüstü bilgisayarlar", brand: "Asus", name: "Asus ROG Strix G15", priceNew: 14000, priceOld: 17000, discount: "18%",  image: "/img/electronics/laptops/asus-rog-strix-g15.png", url: "/product/205" },

  // KULAKLIK - BLUETOOTH KULAKLIK
  { category: "elektronik", subCategory: "bluetooth kulaklıklar", brand: "Sony", name: "Sony WH-CH510 Bluetooth Kulaklık", priceNew: 800, priceOld: 1000, discount: "20%", save: 200, image: "/img/electronics/headphones/sony-wh-ch510.png", url: "/product/301" },
  { category: "elektronik", subCategory: "bluetooth kulaklıklar", brand: "Apple", name: "AirPods Pro", priceNew: 2000, priceOld: 2500, discount: "20%", save: 500, image: "/img/electronics/headphones/airpods-pro.png", url: "/product/302" },
  { category: "elektronik", subCategory: "bluetooth kulaklıklar", brand: "Samsung", name: "Samsung Galaxy Buds Live", priceNew: 900, priceOld: 1100, discount: "18%", save: 200, image: "/img/electronics/headphones/galaxy-buds-live.png", url: "/product/303" },
  { category: "elektronik", subCategory: "bluetooth kulaklıklar", brand: "JBL", name: "JBL Tune 510BT", priceNew: 600, priceOld: 800, discount: "25%", save: 200, image: "/img/electronics/headphones/jbl-tune-510bt.png", url: "/product/304" },
  { category: "elektronik", subCategory: "bluetooth kulaklıklar", brand: "Anker", name: "Anker Soundcore Life Q20", priceNew: 700, priceOld: 900, discount: "22%", save: 200, image: "/img/electronics/headphones/anker-soundcore-q20.png", url: "/product/305" },

  // KULAKLIK - KULAK İÇİ KULAKLIK
  { category: "elektronik", subCategory: "kulak içi kulaklıklar", brand: "Samsung", name: "Samsung Galaxy Buds Pro", priceNew: 900, priceOld: 1200, discount: "25%", save: 300, image: "/img/electronics/headphones/galaxy-buds-pro.png", url: "/product/306" },
  { category: "elektronik", subCategory: "kulak içi kulaklıklar", brand: "Xiaomi", name: "Xiaomi Redmi Airdots", priceNew: 300, priceOld: 400, discount: "25%", save: 100, image: "/img/electronics/headphones/redmi-airdots.png", url: "/product/307" },
  { category: "elektronik", subCategory: "kulak içi kulaklıklar", brand: "Realme", name: "Realme Buds Q2", priceNew: 350, priceOld: 450, discount: "22%", save: 100, image: "/img/electronics/headphones/realme-buds-q2.png", url: "/product/308" },
  { category: "elektronik", subCategory: "kulak içi kulaklıklar", brand: "JBL", name: "JBL C100TWS", priceNew: 500, priceOld: 600, discount: "17%", save: 100, image: "/img/electronics/headphones/jbl-c100tws.png", url: "/product/309" },
  { category: "elektronik", subCategory: "kulak içi kulaklıklar", brand: "Sony", name: "Sony WF-XB700", priceNew: 750, priceOld: 900, discount: "17%", save: 150, image: "/img/electronics/headphones/sony-wf-xb700.png", url: "/product/310" },

  // KULAKLIK - OYUN KULAKLIKLARI
  { category: "elektronik", subCategory: "oyun kulaklıkları", brand: "HyperX", name: "HyperX Cloud II Oyun Kulaklığı", priceNew: 1200, priceOld: 1500, discount: "20%", save: 300, image: "/img/electronics/headphones/hyperx-cloud-ii.png", url: "/product/311" },
  { category: "elektronik", subCategory: "oyun kulaklıkları", brand: "Logitech", name: "Logitech G Pro X", priceNew: 1300, priceOld: 1600, discount: "19%", save: 300, image: "/img/electronics/headphones/logitech-g-pro-x.png", url: "/product/312" },
  { category: "elektronik", subCategory: "oyun kulaklıkları", brand: "Razer", name: "Razer Kraken X", priceNew: 1100, priceOld: 1400, discount: "21%", save: 300, image: "/img/electronics/headphones/razer-kraken-x.png", url: "/product/313" },
  { category: "elektronik", subCategory: "oyun kulaklıkları", brand: "Corsair", name: "Corsair HS70 Pro", priceNew: 1150, priceOld: 1400, discount: "17%", save: 250, image: "/img/electronics/headphones/corsair-hs70-pro.png", url: "/product/314" },
  { category: "elektronik", subCategory: "oyun kulaklıkları", brand: "SteelSeries", name: "SteelSeries Arctis 5", priceNew: 1400, priceOld: 1600, discount: "12%", save: 200, image: "/img/electronics/headphones/steelseries-arctis-5.png", url: "/product/315" },

  // EV ELEKTRONİĞİ
  { category: "elektronik", subCategory: "ev elektroniği", brand: "Philips", name: "Philips Akıllı Ampul", priceNew: 150, priceOld: 200, discount: "25%", save: 50, image: "/img/electronics/home/philips-smart-bulb.png", url: "/product/401" },
  { category: "elektronik", subCategory: "ev elektroniği", brand: "Samsung", name: "Samsung Akıllı TV 55\"", priceNew: 8000, priceOld: 9000, discount: "11%", save: 1000, image: "/img/electronics/home/samsung-smart-tv.png", url: "/product/402" },
  { category: "elektronik", subCategory: "ev elektroniği", brand: "LG", name: "LG Ses Sistemi", priceNew: 1200, priceOld: 1400, discount: "14%", save: 200, image: "/img/electronics/home/lg-sound-system.png", url: "/product/403" },
  { category: "elektronik", subCategory: "ev elektroniği", brand: "Xiaomi", name: "Xiaomi Robot Süpürge", priceNew: 3500, priceOld: 4000, discount: "12%", save: 500, image: "/img/electronics/home/xiaomi-robot-vacuum.png", url: "/product/404" },
  { category: "elektronik", subCategory: "ev elektroniği", brand: "Dyson", name: "Dyson V11 Süpürge", priceNew: 6000, priceOld: 7000, discount: "14%", save: 1000, image: "/img/electronics/home/dyson-v11.png", url: "/product/405" },

  // GİYİM
  { category: "giyim", name: "Basic T-Shirt", priceNew: 49, priceOld: 99, discount: "50%", save: 50, image: "/img/clothing/tshirt.png", url: "/product/41" },
  { category: "giyim", name: "Kot Pantolon", priceNew: 149, priceOld: 249, discount: "40%", save: 100, image: "/img/clothing/jeans.png", url: "/product/42" },
  { category: "giyim", name: "Hırka", priceNew: 99, priceOld: 199, discount: "50%", save: 100, image: "/img/clothing/cardigan.png", url: "/product/43" },
  { category: "giyim", name: "Sweatshirt", priceNew: 129, priceOld: 229, discount: "44%", save: 100, image: "/img/clothing/sweatshirt.png", url: "/product/44" },
  { category: "giyim", name: "Mont", priceNew: 399, priceOld: 599, discount: "33%", save: 200, image: "/img/clothing/jacket.png", url: "/product/45" },
  { category: "giyim", name: "Elbise", priceNew: 299, priceOld: 499, discount: "40%", save: 200, image: "/img/clothing/dress.png", url: "/product/46" },
  { category: "giyim", name: "Şapka", priceNew: 49, priceOld: 89, discount: "44%", save: 40, image: "/img/clothing/hat.png", url: "/product/47" },
  { category: "giyim", name: "Ayakkabı", priceNew: 299, priceOld: 499, discount: "40%", save: 200, image: "/img/clothing/shoes.png", url: "/product/48" },
  { category: "giyim", name: "Atkı", priceNew: 69, priceOld: 119, discount: "42%", save: 50, image: "/img/clothing/scarf.png", url: "/product/49" },
  { category: "giyim", name: "Eldiven", priceNew: 39, priceOld: 69, discount: "43%", save: 30, image: "/img/clothing/gloves.png", url: "/product/50" },

  // SPOR MALZEMELERİ
  { category: "spor", name: "Koşu Ayakkabısı", priceNew: 499, priceOld: 699, discount: "28%", save: 200, image: "/img/sports/running-shoes.png", url: "/product/51" },
  { category: "spor", name: "Yoga Matı", priceNew: 149, priceOld: 199, discount: "25%", save: 50, image: "/img/sports/yoga-mat.png", url: "/product/52" },
  { category: "spor", name: "Spor Çantası", priceNew: 199, priceOld: 299, discount: "33%", save: 100, image: "/img/sports/sport-bag.png", url: "/product/53" },
  { category: "spor", name: "Ağırlık Seti", priceNew: 799, priceOld: 999, discount: "20%", save: 200, image: "/img/sports/weights.png", url: "/product/54" },
  { category: "spor", name: "Bisiklet Kaskı", priceNew: 199, priceOld: 299, discount: "33%", save: 100, image: "/img/sports/bike-helmet.png", url: "/product/55" },

  // KITAPLAR
  { category: "kitap", name: "1984 - George Orwell", priceNew: 39, priceOld: 59, discount: "34%", save: 20, image: "/img/books/1984.png", url: "/product/56" },
  { category: "kitap", name: "Suç ve Ceza - Dostoyevski", priceNew: 49, priceOld: 79, discount: "38%", save: 30, image: "/img/books/suc-ve-ceza.png", url: "/product/57" },
  { category: "kitap", name: "Simyacı - Paulo Coelho", priceNew: 29, priceOld: 49, discount: "40%", save: 20, image: "/img/books/simyaci.png", url: "/product/58" },
  { category: "kitap", name: "Yüzüklerin Efendisi - J.R.R. Tolkien", priceNew: 99, priceOld: 149, discount: "33%", save: 50, image: "/img/books/yuzuklerin-efendisi.png", url: "/product/59" },
  { category: "kitap", name: "Sefiller - Victor Hugo", priceNew: 59, priceOld: 89, discount: "33%", save: 30, image: "/img/books/sefiller.png", url: "/product/60" },

  // KİŞİSEL BAKIM ÜRÜNLERİ
  { category: "kişisel bakım", name: "Şampuan", priceNew: 39, priceOld: 59, discount: "34%", save: 20, image: "/img/personal-care/shampoo.png", url: "/product/61" },
  { category: "kişisel bakım", name: "Saç Kremi", priceNew: 29, priceOld: 49, discount: "40%", save: 20, image: "/img/personal-care/hair-conditioner.png", url: "/product/62" },
  { category: "kişisel bakım", name: "Diş Macunu", priceNew: 19, priceOld: 29, discount: "34%", save: 10, image: "/img/personal-care/toothpaste.png", url: "/product/63" },
  { category: "kişisel bakım", name: "Vücut Losyonu", priceNew: 49, priceOld: 69, discount: "28%", save: 20, image: "/img/personal-care/body-lotion.png", url: "/product/64" },
  { category: "kişisel bakım", name: "Parfüm", priceNew: 199, priceOld: 299, discount: "33%", save: 100, image: "/img/personal-care/perfume.png", url: "/product/65" },

  // OYUN & EĞLENCE
  { category: "eğlence", subCategory: "video oyunları", brand: "Sony", name: "PlayStation 5", priceNew: 12000, priceOld: 13000, discount: "7%", save: 1000, image: "/img/entertainment/ps5.png", url: "/product/66" },
  { category: "eğlence", subCategory: "video oyunları", brand: "Microsoft", name: "Xbox Series X", priceNew: 11000, priceOld: 12000, discount: "8%", save: 1000, image: "/img/entertainment/xbox-series-x.png", url: "/product/67" },
  { category: "eğlence", subCategory: "video oyunları", brand: "Nintendo", name: "Nintendo Switch", priceNew: 7500, priceOld: 8000, discount: "6%", save: 500, image: "/img/entertainment/nintendo-switch.png", url: "/product/68" },
  { category: "eğlence", subCategory: "film & dizi", brand: "Netflix", name: "Netflix Aboneliği 3 Ay", priceNew: 120, priceOld: 150, discount: "20%", save: 30, image: "/img/entertainment/netflix.png", url: "/product/69" },
  { category: "eğlence", subCategory: "film & dizi", brand: "Blu-ray", name: "Inception Blu-ray Disk", priceNew: 70, priceOld: 90, discount: "22%", save: 20, image: "/img/entertainment/inception-bluray.png", url: "/product/70" },
];

async function seedDB() {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Veriler başarıyla yüklendi.");
    mongoose.connection.close();
  } catch (error) {
    console.error("Seed verisi yüklenirken hata:", error);
  }
}

seedDB();


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },  
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // İstersen başka alanlar da ekleyebilirsin (örn: createdAt, role vb.)
});

const User = mongoose.model('User', userSchema);

module.exports = User;

