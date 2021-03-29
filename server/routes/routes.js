//server/routes/routes.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var Expense = require('../../models/Expense');
var Electronics = require('../../models/Electronics');
//const User = require('../../models/User');



router.get('/', function(req, res){
  res.render('index')
});


router.get('/getAllElectronics',function(req, res) {

	Electronics.find({}, function(err, electronics) {
		if (err) {
			res.send(err);
		} else {
			res.json(electronics);
			//console.log(electronics)
		}
	})

});


router.route("/insert-electronics").post(function (req, res) {
	var electronic = new Electronics();

	electronic.name = req.body.name;
	electronic.make = req.body.make;
	electronic.model = req.body.model;
	electronic.location = req.body.location;
	electronic.cost = req.body.cost;
	electronic.value = req.body.value;
	electronic.purchase_date = req.body.purchase_date;

	electronic.save(function (err) {
		if (err) res.send(err);
		res.send("Electronic successfully added!");
	});
});

/*
   * Sign up
  
router.post('/api/account/signup', (req, res, next) => {
    const { body } = req;
    const {
      password
    } = body;
    let {
      email
    } = body;
    
    if (!email) {
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank.'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }
    email = email.toLowerCase();
    email = email.trim();
    // Steps:
    // 1. Verify email doesn't exist
    // 2. Save
    User.find({
      email: email
    }, (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Account already exist.'
        });
      }
      // Save the new user
      const newUser = new User();
      newUser.email = email;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, user) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Error: Server error'
          });
        }
        return res.send({
          success: true,
          message: 'Signed up'
        });
      });
    });
  }); // end of sign up endpoint

/*
router.route("/insert-expense").post(function (req, res) {
	var expense = new Expense();
	expense.description = req.body.desc;
	expense.amount = req.body.amount;
	expense.month = req.body.month;
	expense.year = req.body.year;
	expense.save(function (err) {
		if (err) res.send(err);
		res.send("Expense successfully added!");
	});
});

router.route("/update-expense").post(function (req, res) {
	const doc = {
		description: req.body.description,
		amount: req.body.amount,
		month: req.body.month,
		year: req.body.year,
	};
	console.log(doc);
	Expense.updateOne({ _id: req.body._id }, doc, function (err, result) {
		if (err) res.send(err);
		res.send("Expense successfully updated!");
	});
});

router.get('/delete-expense', function(req, res){
 var id = req.query.id;
 Expense.find({_id: id}).remove().exec(function(err, expense) {
  if(err)
   res.send(err)
  res.send('Expense successfully deleted!');
 })
});

router.get('/getAllExpenses',function(req, res) {
 var monthRec = req.query.month;
 var yearRec = req.query.year;
 if(monthRec && monthRec != 'All'){
  Expense.find({$and: [ {month: monthRec}, {year: yearRec}]}, function(err, expenses) {
   if (err)
    res.send(err);
   res.json(expenses);
  });
 } else {
  Expense.find({year: yearRec}, function(err, expenses) {
   if (err)
    res.send(err);
   res.json(expenses);
  });
 }
});
*/




module.exports = router;
