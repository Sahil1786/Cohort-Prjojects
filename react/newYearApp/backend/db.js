const mongodb=require("mongoose");
const { string, boolean } = require("zod");



mongodb.connect('mongodb://127.0.0.1:27017/PetariDB')
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log(err.message);
    });

const todoSchema=({
    tittle:string,
    description:string,
    completed:boolean,
})


const tudo=mongodb.model('todos',tudoSchema);
module.exports={
    todo
}