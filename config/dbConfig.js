const mongoose = require('mongoose')

async function db(){
    await mongoose.connect('mongodb://localhost:27017/cvtSept')
}

module.exports = db;