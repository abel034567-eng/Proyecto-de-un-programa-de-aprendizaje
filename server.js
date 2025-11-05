const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Conexión a MongoDB local o Atlas
mongoose.connect('mongodb+srv://quiz_user:usuariodequizparaproyecto@clusterprueba.b2u6i7d.mongodb.net/quizDB?appName=ClusterPrueba', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error(err));

// Rutas del Quiz
const quizRoutes = require('./routes/quizRoutes');
app.use('/', quizRoutes);

// Rutas del panel de administración
const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);

// Servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));
