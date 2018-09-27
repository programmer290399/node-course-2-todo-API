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
    // db.collection('Todos').find({ 
    //     _id : new ObjectID("5bab424a0ccf571024993e5e")
    // }).toArray().then((docs)=>{
    //         console.log(JSON.stringify(docs,undefined,2))
    // },(err)=>{
    //     console.log('Unable to fetch todos',err)
    // })
    
    // db.collection('Todos').find().count().then((count)=>{
    //         console.log(`Todos Count : ${count}`)
    // },(err)=>{
    //     console.log('Unable to fetch todos',err)
    // })
    
    db.collection('Users').find({
        name : 'Saahil'
        }).toArray().then((docs)=>{
                console.log(JSON.stringify(docs,undefined,2))
        },(err)=>{
            console.log('Unable to fetch todos',err)
        })

    // client.close()
})