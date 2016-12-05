# Querying embeded models:

This is a sample LoopBack app to show how to query embeded model.

- **JS code** :

    ```
    customers.find({
      where: {
        'billingAddress.address1': 'Toronto-York'
      }
    }, function(err, customers) {
      console.log('>result of emeded model query:', err, customers);
      done(err);
    })
    ```

    For more infor please see `server/boot.js`

- **HTTP endpoint** :
    Please run the app using `node .` and try the following endpoint in the browser:

    http://localhost:3000/api/customers?filter[where][billingAddress.address1]=Toronto-York