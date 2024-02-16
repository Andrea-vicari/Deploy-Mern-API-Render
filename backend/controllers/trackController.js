const Tracks = require('../models/TrackModel');
const mongoose = require('mongoose');


// Get ALL tracks:
const viewAllTracks = async (req, res)=> {
    const allTrack = await Tracks.find({}).sort({createdAt: -1});
    res.status(200).json(allTrack)
}

// Get a single track
const getSingleTrack = async (req, res)=> {

        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "No Track found"})
        }

        const track = await Tracks.findById(id);

        if(!track){
          return res.status(400).json({error: "No Track found"})
        }
        res.status(200).json(track);
}

// Create a NEW track:
const createNewTrack = async (req, res)=> {

    const {user_id, keyNumber, trackUrl, mp3Name, bpm, genre} = req.body

    try{
        const track = await Tracks.create({user_id, keyNumber, trackUrl, mp3Name, bpm, genre})
        res.status(200).json(track)
    }

    catch(error){
        res.status(400).json({error: error.message})
    }

}

// Delete a single track
const deleteTrack = async (req, res)=> {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Track found"})
    }

    const track = await Tracks.findOneAndDelete({_id: id})

    if(!track){
        return res.status(400).json({error: "No Track found"})
      }
      res.status(200).json(track);
}

// Update a single track
const updateTrack = async (req, res)=> {

    const {user_id, keyNumber, trackUrl, mp3Name, bpm, genre} = req.body

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Track found gg"})
    }

    const track = await Tracks.findByIdAndUpdate({_id: id},{
        ...req.body
    })

    if(!track){
        return res.status(400).json({error: "No Track found y"})
    }
    res.status(200).json(track);

}


module.exports = {
    createNewTrack, viewAllTracks, getSingleTrack, deleteTrack, updateTrack
}