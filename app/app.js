var express     =       require('express'),
    path        =       require('path'),
    routes		=		require('./routes')
   	// bodyParser 	= 		require('body-parser');

global.appRoot = path.resolve(__dirname);
var app = express();
var router = express.Router();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
// console.log(routes);

// app.use('/api');
app.get('/', routes.index);
app.get('/getUserData',routes.getUserData);
app.post('/setUserData',routes.setUserData);

var server = app.listen(app.get('port'), function() {
console.log("server started");
});

module.exports = app;