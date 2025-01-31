```javascript
//Correct usage of $inc operator in MongoDB
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{counter:1}});
//or
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{counter:parseInt(someVariable)}});
//always check for valid numbers before using $inc
let someVariable = 1; 
if (isNaN(someVariable)) {
console.error('Variable is not a number');
} else {
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{counter:someVariable}});
}
```