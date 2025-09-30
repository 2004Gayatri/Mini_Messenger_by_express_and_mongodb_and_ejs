const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then((res)=>{console.log("Connection successful")}).catch((err)=>{console.log(err)});
async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

Chat.insertMany([
    {
         from : "Gayu",
    to : "Priya",
    msg : "Send me my project that i shared with you ",
    created_at : new Date()
    },
     {
         from : "Pranali",
    to : "Priyansh",
    msg : "hello",
    created_at : new Date()
    },
     {
         from : "Priyansh",
    to : "Pranali",
    msg : "Hii my littel sister ",
    created_at : new Date()
    },
     {
         from : "Mohan",
    to : "Mohini",
    msg : "How are you",
    created_at : new Date()
    },
     {
         from : "Ram",
    to : "Sham",
    msg : "How are you ? ",
    created_at : new Date()
    },

])