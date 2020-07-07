var mysql = require("mysql");
//Database connection
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host     : 'db',
		user     : 'root',
		password : 'password',
		database : 'test'
	});
	res.locals.connection.connect();
	next();
});


app.use('/', index);
app.use('/api/v1/users', users);
app.use('/users', users);
