const express = require('express');
const path = require('path');
const app = express();

// Phục vụ các tệp tĩnh từ thư mục 'src'
app.use(express.static(path.join(__dirname, 'src')));

// Route chính để phục vụ tệp index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Lắng nghe trên cổng 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});