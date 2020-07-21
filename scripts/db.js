var mongoDb = require('mongodb');

var mongoClient = mongoDb.MongoClient;
var maybDbUrl = "mongodb://127.0.0.1:27017";

var main = function() {
    createTable("business_types");
    createTable("businesses");
    createTable("users");
    createTable("products");
    createTable("inventory");
    createTable("transactions");
}

var createTable = function(tableName) {
    mongoClient.connect(maybDbUrl, function(err, db) {
        if (err) throw err;
        var dbo = db.db("maybDb");
        createCollectionInMongoDb(db, dbo, tableName);
    });
}

var createCollectionInMongoDb = function(db, dbo, tableName) {
    dbo.createCollection(tableName, function(err, result) {
        if (err) throw err;
        console.log("Collection " + tableName + " is created!");
        db.close();
    });
}

main()
