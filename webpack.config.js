const path = require('path'); 

module.exports = { 
    mode: 'production', 
    watch:true,
    entry: ['./js/navscroll.js', './js/jobsbutton.js' ,'./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'], 
    output: { 
        filename: 'main.js', 
        path: path.resolve(__dirname, 'dist'), 
    }, 
};