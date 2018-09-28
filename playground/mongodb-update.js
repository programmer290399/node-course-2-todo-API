
const {MongoClient,ObjectID} = require('mongodb')

var obj = new ObjectID()
console.log(obj)
MongoClient.connect('mongodb://localhost:27017/TodoAPP',(err,client)=>{
    if(err){
        return console.log('unable to connect to MongoDB server')    
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoAPP')
    
    db.collection('Users').findOneAndUpdate(
        {_id : new ObjectID("5bab4e85f4a50411f8856fea")},
        {$set : {name : 'Saahil Ali'}},
        {$inc :{age : -1 } },
        {returnOriginal : false}).then((result)=>{
            console.log(result)
        })
   
})