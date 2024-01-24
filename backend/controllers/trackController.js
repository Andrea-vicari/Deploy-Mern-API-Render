const Tracks = require('../models/TrackModel');
const mongoose = require('mongoose');


// Get ALL tracks:
const viewAllTracks = async (req, res)=> {
    const allTrack = await Tracks.find({}).sort({createdAt: -1});
    res.status(200).json(allTrack)
}


module.exports = {
    viewAllTracks
}