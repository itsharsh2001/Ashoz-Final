import mongoose from "mongoose";
const { Schema } = mongoose;

const shopSchema = new Schema({
  businessName: {
    type: String,
    require: true,
    trim: true,
  },

  ownerName: {
    type: String,
    require: true,
    trim: true,
  },

  mobileNumber: {
    type: Number,
    require: true,
    trim: true,
  },

  contactPerson: {
    type: String,
    require: true,
    trim: true,
  },

  category: {
    type: String,
    require: true,
    trim: true,
  },

  area: {
    type: String,
    require: true,
    trim: true,
  },

  location: {
    type: String,
    require: true,
    trim: true,
  },

  street: {
    type: String,
    require: true,
    trim: true,
  },

  landmark: {
    type: String,
    require: true,
    trim: true,
  },

  businessAddress: {
    type: String,
    require: true,
    trim: true,
  },

  businessEmail: {
    type: String,
    require: true,
    trim: true,
  },

  businessInformation: {
    type: String,
    require: true,
    trim: true,
  },

  interested: {
    type: Boolean,
    require: true,
    trim: true,
  },

  ownerRecording: 
    {
      type: String,
      require: true,
      trim: true,
    },

  ownerImage: {
    type: String,
    require: true,
    trim: true,
  },

  socialSites: {
    website: {
      isWebsite: {
        type: Boolean,
        require: true,
      },
      websiteurl: {
        type: String,
        require: true,
        trim: true,
      },
    },

    instagram: {
      isInsta: {
        type: Boolean,
        require: true,
      },
      instaurl: {
        type: String,
        require: true,
        trim: true,
      },
    },

    facebook: {
      isFacebook: {
        type: Boolean,
        require: true,
      },
      facebookurl: {
        type: String,
        require: true,
        trim: true,
      },
    },

    youtube: {
      isYoutube: {
        type: Boolean,
        require: true,
      },
      youtubeurl: {
        type: String,
        require: true,
        trim: true,
      },
    },
  },

  notInterested: {
    answer: {
      type: String,
      require: true,
    },
  },

  workingHours: {
    monday: {
      type: Boolean,
      require: true,
    },

    tuesday: {
      type: Boolean,
      require: true,
    },

    wednesday: {
      type: Boolean,
      require: true,
    },

    thrusday: {
      type: Boolean,
      require: true,
    },

    friday: {
      type: Boolean,
      require: true,
    },

    saturday: {
      type: Boolean,
      require: true,
    },

    sunday: {
      type: Boolean,
      require: true,
    },

    mondayToSaturday: {
      type: Boolean,
      require: true,
    },
  },

  paymentStatus:{
    type: Boolean,
    default:false,
  },

  paymentMode: {
    cash: {
      type: Boolean,
      require: true,
    },

    debitAndCreditCards: {
      type: Boolean,
      require: true,
    },
    upi: {
      type: Boolean,
      require: true,
    },
    date:{
      type:String,
      require:true
    }
  },

  yearOfEstablished: {
    type: String,
    require: true,
  },

  certification: {
    gst: {
      type: Boolean,
      require: true,
    },

    other: {
      type: String,
      require: true,
    },
  },

  businessKeyWords: [
    {
      type: String,
      require: true,
    },
  ],

  marketKeyWords: [
    {
      type: String,
      require: true,
    },
  ],

  feedback: {
    type: String,
    require: true,
  },

  agentInformation: {
    agentName: {
      type: String,
      require: true,
    },

    agentId: {
      type: String,
      require: true,
    },
  },

  date: {
    type: String,
    require: true,
  },

  visitSummary:{
    type: Number,
    require: true,
  },

  requestForCorrection:{
    type:Boolean,
    default:false
  },

  workflowStatus:{
    type:String,
    require:true
  },

  visualteam:{

    photographer:{
      video:{
        type:String,
        require:true
      },
      image:{
        type:String,
        require:true
      },
      videoStatus:{
        type:Boolean,
        default:false
      },
      imageStatus:{
        type:Boolean,
        default:false
      },
      date:{
        type:String,
        require:true
      }
    },

    
    editableTeam:{
      video:{
        type:String,
        require:true
      },

      image:{
        type:String,
        require:true
      },

      imageStatus:{
        type:Boolean,
        default:false
      },

      videoStatus:{
        type:Boolean,
        default:false
      },

      date:{
        type:String,
        require:true
      }
    }
  },

 

});

module.exports = mongoose.models.Shop || mongoose.model("Shop", shopSchema);
