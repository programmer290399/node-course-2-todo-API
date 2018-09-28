// const MongoClient = require('mongodb').MongoClient
const {MongoClient,ObjectID} = require('mongodb')

var obj = new ObjectID()
console.log(obj)
MongoClient.connect('mongodb://localhost:27017/TodoAPP',(err,client)=>{
    if(err){
        return console.log('unable to connect to MongoDB server')    
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoAPP')
    
    //deleting many 

    // db.collection('Todos').deleteMany({text : "eat lunch"}).then((res)=>{
        // console.log(res)
    // })

// deleteone
// db.collection('Todos').deleteOne({text : "Eat lunch"}).then((result)=>{
//     console.log(result)
// }) 
// find one and delete 
// db.collection('Todos').findOneAndDelete({complete : false}).then((result)=>{
    //  console.log(result)
    // }) 


    // client.close()
})