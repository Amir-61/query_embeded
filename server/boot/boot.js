module.exports = function (server, done) {
  var customers = server.models.customer;
  server.dataSources.db.automigrate('customer', function (err) {
    if (err) {
      console.error("boot, ERR:", err);
      done(err);
    } else {
      customers.create([{
        name: 'John Doe',
          "billingAddress": {
          "address1": "Toronto-York",
          "address2": "Toronto-Scarborogh"
        }
      },{
        name: 'Jane Doe',
          "billingAddress": {
          "address1": "Toronto-Richmondhill",
          "address2": "Toronto-Vaughn"
        }
      }], function (err, createdCustomers) {
        if (err) return done(err);
        console.log('>Created customer instances:', createdCustomers);
        customers.find({
          where: {
            'billingAddress.address1': 'myaddress1'
          }
        }, function(err, customers) {
          console.log('>result of emeded model query:', err, customers);
          done(err);
        })        
      })
    }
  })
}