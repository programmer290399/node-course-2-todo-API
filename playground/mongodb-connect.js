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
    // db.collection('Todos').insertOne({
    //     Text : 'Something to do ',
    //     completed : false 
    // },(err , result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2))
    // })
    
    // db.collection('Users').insertOne({
    //     name : 'Saahil',
    //     age : 19 ,
    //     location : 'Indore',
    //     complete : false
    // },(err , result)=>{
    //         if(err){
    //             return console.log('Unable to insert todo', err)
    //         }
    //        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2))}
    //        )
    
          
           client.close()
})