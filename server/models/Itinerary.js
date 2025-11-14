import mondoose from 'mongoose';

const itinerarySchema = new mondoose.Schema({
    userId: {
        type: mondoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
},
    tripRequestId: {
        type: mondoose.Schema.Types.ObjectId,
        ref: "TripRequest",
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
    dayWisePlan: [
        {
            day: {
                type: Number,
                required: true
            },
            activities: [
                {
                    type: String,
                    required: true
                }
            ],
            descdescription: {
                type: String,
                required: true
            }
        }
    ],
    hotelSuggestions: [
        {
            name: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            pricePerNight: {
                type: Number,
                required: true
            },
            link: {
                type: String,
                required: true
            }
        }
    ],

        travelSuggestions: [
            {
                mode: {
                    type: String,
                    required: true
                },
                partner: {
                    type: String,
                    required: true
                },
                departure: {
                    type: String,
                    required: true
                },
                arrival: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                link: {
                    type: String,
                    required: true
                }
            }
        ],
            
        tips: {
            type: String,
            required: false
        },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const Itinerary = mondoose.model("Itinerary", itinerarySchema);
export default Itinerary