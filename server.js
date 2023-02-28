// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up storage engine for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'ZXCVF/');
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  }
});

// Set up Multer middleware
const upload = multer({ storage: storage });

// Route to handle file upload
app.post('/ZXCVF', upload.single('file'), (req, res) => {
  const fileUrl = `${req.protocol}://${req.get('host')}/ZXCVF/${req.file.filename}`;
  res.status(200).send(fileUrl);
});

// Route to handle file download
app.get('/ZXCVF/:filename', (req, res) => {
  const file = path.join(__dirname, 'ZXCVF', req.params.filename);
  res.download(file);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
