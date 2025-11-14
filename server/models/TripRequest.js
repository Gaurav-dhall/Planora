import mongoose from "mongoose";

const tripRequestSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
   from : {
        type: String,
        required: true
   },
    destination: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    tourType: {
        type: String,
        required: true
    },
    tripType: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },

    travelers: {
        type: Number,
        required: true
    },
    stayPreferences: {
        type: String,
        required: true
    },
    travelPreferences: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
    const TripRequest = mongoose.model("TripRequest", tripRequestSchema);
    export default TripRequest;     
    