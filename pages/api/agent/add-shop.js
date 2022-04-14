import dbConnect from "../../../lib/dbConnect";
import Shop from "../../../models/Shop";


dbConnect();
let emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":

    const allShops = await Shop.find({});
    return res.status(200).json({message:allShops,shoplength:allShops.length})

    break;


    case "POST":
      const {
        businessName,
        ownerName,
        mobileNumber,
        contactPerson,
        category,
        area,
        location,
        street,
        landmark,
        businessAddress,
        businessEmail,
        businessInformation,
        interested,
        ownerRecording,
        ownerImage,
        website,
        websiteurl,
        instagram,
        instaurl,
        facebook,
        facebookurl,
        youtube,
        youtubeurl,
        notInterestedanswer,
        monday,
        tuesday,
        wednesday,
        thrusday,
        friday,
        saturday,
        sunday,
        mondayToSaturday,
        cash,
        debitAndCreditCards,
        upi,
        yearOfEstablished,
        gst,
        otherThanGst,
        businessKeyWords,
        marketKeyWords,
        feedback,
        agentName,
        agentId,
        visited
      } = req.body;


      if (
        !businessName ||
        !ownerName ||
        !mobileNumber ||
        !contactPerson ||
        !category ||
        !area ||
        !location ||
        !businessAddress ||
        !businessEmail ||
        !businessInformation
      ) {
        return res.status(400).json({ message: "Fill The required Fields" });
      }

      if (businessName.length < 3)
        return res.status(400).json({ message: "Enter Valid Business Name" });

      if (ownerName.length < 3)
        return res.status(400).json({ message: "Enter Valid Owner Name" });

      if (mobileNumber.length != 10)
        return res.status(400).json({ message: "Enter Valid Mobile Number" });

      if (contactPerson.length < 3)
        return res.status(400).json({ message: "Enter Valid Contact Person" });

      if (!emailRegex.test(businessEmail))
        return res.status(400).json({ message: "Enter Valid Business Email" });

      if (interested) {
        if (
          !businessKeyWords ||
          !marketKeyWords ||
          !feedback
        ) {
          return res.status(400).json({ message: "Fill The required Fields" });
        }
      }

    
      const existingShop = await Shop.findOne({mobileNumber:mobileNumber, businessEmail:businessEmail})

      if(existingShop){
          return res.status(400).json({message:'Shop Already Exist'})
      }


      let date = new Date()
      let day = date.getDate();
      let month = date.getMonth()+1;
      let year = date.getFullYear();

      let fullDate = `${day}.${month}.${year}.`;

      let visitNumber = 0;
      let workflow = 'admin'
      let paymentDate;

      let paymentStatus = false;

      if(cash){
        paymentStatus = true
        paymentDate=fullDate
      }

      if(debitAndCreditCards)
      {
        paymentStatus = true
        paymentDate=fullDate
      }

      if(upi){
        paymentStatus = true
        paymentDate=fullDate
      }


      
      if(visited){
        visitNumber = 1;
        workflow = 'Visual Team - Photographer'
      }

      if(!visited){
        visitNumber = 1;
        workflow = 'agent'
      }

      if(visited && !paymentStatus){
        visitNumber = 1;
        workflow = 'admin'
      }



      const newShop = new Shop({
        businessName,
        ownerName,
        mobileNumber,
        contactPerson,
        category,
        area,
        location,
        street,
        landmark,
        businessAddress,
        businessEmail,
        businessInformation,
        interested,
        ownerRecording,
        ownerImage,
        socialSites: {
          website: {
            isWebsite:website,
            websiteurl,
          },

          instagram: {
            isInsta:instagram,
            instaurl,
          },

          facebook: {
            isFacebook:facebook,
            facebookurl,
          },

          youtube: {
            isYoutube:youtube,
            youtubeurl,
          },
        },

        notInterested: {
          answer:notInterestedanswer,
        },

        paymentStatus:paymentStatus,

        workingHours: {
          monday,
          tuesday,
          wednesday,
          thrusday,
          friday,
          saturday,
          sunday,
          mondayToSaturday,
        },

        paymentMode: {
          cash,
          debitAndCreditCards,
          upi,
          date:paymentDate
        },

        yearOfEstablished,
        certification: {
          gst,
          other:otherThanGst,
        },

        businessKeyWords,
        marketKeyWords,
        feedback,
        agentInformation: {
          agentName,
          agentId,
        },
        date:fullDate,
        visitSummary:visitNumber,
        workflowStatus:workflow
      });


      await newShop.save();

      return res.status(200).json({ message: "added SuccessFully" });

      break;
    default:
      res.status(400).json({ message: "error" });
  }
};
