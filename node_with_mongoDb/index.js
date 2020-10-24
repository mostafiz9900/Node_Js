
var MongoClient=require('mongodb').MongoClient;


var url='mongodb+srv://mostafiz9900:fjNf5ycAlaWSlyoa@cluster0.d2rop.mongodb.net?retryWrites=true&w=majority';

var config= { useUnifiedTopology: true };
MongoClient.connect(url,config,function (error,MyMongoClinet) {
    if (error){
        console.log("Connection Fail");
    }else {
        console.log("Connection success");
        InsertData(MyMongoClinet);
        // DeleteData(MyMongoClinet);
        // DeleteAllData(MyMongoClinet);
    }
})

function InsertData(MyMongoClinet) {
  var myDatabase=  MyMongoClinet.db("school");
    var myCollection=myDatabase.collection("student");
    var myData={name:"Sowpon",class:"10",roll:"01",city:"Dhaka"};

    myCollection.insertOne(myData,function (error) {
        if (error){
            console.log("insert data fail");
        }else {
            console.log("insert data success");
        }
    })
}
function DeleteData(MyMongoClinet) {
    var myDatabase=  MyMongoClinet.db("school");
    var myCollection=myDatabase.collection("student");
    var DeleteItem={name:"Mostafiz"};

    myCollection.deleteOne(DeleteItem,function (error) {
        if (error){
            console.log("Delete data fail");
        }else {
            console.log("Delete data success");
        }
    })
}

function DeleteAllData(MyMongoClinet) {
    var myDatabase=  MyMongoClinet.db("school");
    var myCollection=myDatabase.collection("student");

    myCollection.deleteMany(function (error,result) {
        if (error){
            console.log("Delete data fail");
        }else {
            console.log(result);
        }
    })
}