const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/DataBase', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongo DB Server');
    }
    console.log('Connected to Mongo DB Server');

    // db.collection('Collection').insertOne({
    //     text: 'Sample',
    //     id: 4
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todos', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
        
    // })

    db.collection('Users').insertOne({
         name: 'Bolanle',
         age: 22,
         location: 'Work'
    }, (err, result) => {
        if(err){
           return console.log('Unable to insert into the db', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    db.close();
});