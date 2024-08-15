const mongoose = require('mongoose')

const episodeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    episodeNum: {
        type: Number,
        required: true,
    },
    season: {
        type: Number,
        required: true,
    },
    episodeDesc: {
        type: String,
        required: true
    }
})

const Episode = mongoose.model('Episode', episodeSchema)
module.exports = Episode