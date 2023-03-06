//npm install express
//call the express package
const app = require('express')();
const PORT = 4000;
//localhost port number we can change it
app.listen(
    PORT,
    () => console.log(`its running on http://localhost:${PORT}`)
);
//sample JSON data
const data = [{
    "id":"1",
    "name":"thamizh",
    "class":"Msc"},
    {
    "id":"2",
    "name":"siav",
    "class":"Msc"},
    {
    "id":"3",
    "name":"sanjay",
    "class":"Msc"},
    {
    "id":"4",
    "name":"pacahi",
    "class":"Msc"},
    {
    "id":"5",
    "name":"sakthi",
    "class":"Msc"},
    {
    "id":"6",
    "name":"vinith",
    "class":"Msc"},
    {
    "id":"7",
    "name":"ameen",
    "class":"Msc"}
]
//It only GET method Api for getting the data in the JSON formate
app.get('/student',(req,res)=> {
    res.json(data)
});


