


//yeni 

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(cors({
   origin: '*'
  
}));
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB bağlantısı başarılı"))
.catch(err => console.error("❌ MongoDB bağlantı hatası:", err.message));

const productSchema = new mongoose.Schema({
  category: String,
  subCategory: String,    // BU SATIRI EKLE
  name: String,
  priceNew: Number,
  priceOld: Number,
  discount: String,
  save: Number,
  image: String,
  url: String,
});
const Product = mongoose.model('Product', productSchema);

// Ana endpoint
app.get('/', (req, res) => {
  res.send('Backend çalışıyor!');
});

// Ürün listesi
app.get('/api/products', async (req, res) => {
  try {
    const { category, subCategory } = req.query;

    // Filtre objesi oluştur
    let filter = {};

    if (category) {
      filter.category = category;
    }
    if (subCategory) {
      filter.subCategory = subCategory;
    }
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Veriler alınamadı" });
  }
});

// Arama
app.get('/api/products/search', async (req, res) => {
  try {
    const q = req.query.q || "";
    const products = await Product.find({
      $or: [
        { name: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
        { subCategory: { $regex: q, $options: "i" } }
      ]
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Arama sırasında hata oluştu" });
  }
});

// ❗️Buraya taşı: Kullanıcı bilgisi için endpoint
app.get('/api/user', (req, res) => {
  res.json({ name: "Test Kullanıcısı", email: "test@example.com" });
});

app.listen(PORT, () => {
  console.log(`🚀 Sunucu çalışıyor: http://localhost:${PORT}`);
});

// Ürün detay endpoint'i
app.get('/api/products/:id', async (req, res) => {
  try {
    const id = req.params.id;
    console.log("İstenen ürün id:", id);

    // Geçerli MongoDB ObjectId mi kontrol et
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Geçersiz ürün id'si" });
    }

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Ürün bulunamadı" });
    }
    res.json(product);
  } catch (err) {
    console.error("Ürün alınırken hata:", err);
    res.status(500).json({ error: "Ürün alınırken hata oluştu" });
  }
});
