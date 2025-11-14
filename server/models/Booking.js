import mongoose from "mongoose";
import { use } from "react";
const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
  
    itineraryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Itinerary",
        required: true
    },
    vendor:{
        type: String,
        required: true
    },
    redirectUrl:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
   
    
})
const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
    