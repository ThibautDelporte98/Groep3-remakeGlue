const path = require('path'); 
module.exports = { 
    mode: 'production', 
    entry: ['./js/navscroll.js', './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'], 
    output: { 
        filename: 'main.js', 
        path: path.resolve(__dirname, 'dist'), 
    }, 
};