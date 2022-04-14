import dbConnect from "../../../lib/dbConnect";
import Shop from "../../../models/Shop";
dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
    //  const {
    //      category,
    //      email,
    //      businessName,
    //      ownerName,
    //      mobileNumber,
    //      contactPerson, 
    //      area,
    //      location,
    //      street,
    //      landmark,
    //      businessAddress,
    //      businessEmail,
    //      businessInformation,
    //      interested,
    //      ownerImage,
    //      website,
    //      isInsta,
    //      isFacebook,
    //      isYoutube,
    //      monday,
    //      tuesday,
    //      wednesday,
    //      thrusday,
    //      friday,
    //      saturday,
    //      sunday,
    //      mondayToSaturday,
    //      paymentStatus,
    //      cash,
    //      debitAndCreditCards,
    //      upi,
    //      yearOfEstablished,
    //      gst,
    //      otherthangst,
    //      businessKeyWords,
    //      marketKeyWords,
    //      feedback,
    //      visitSummary,
    //      requestForCorrection,
    //      workflowStatus,
    //      photographervideo,
    //      photographerimage,
    //      editableTeamvideo,
    //      editableTeamimage
    //  }
    //  = req.body;

    const {name, email, value} = req.body;

    
      const existingShop = await Shop.findOne({businessEmail:email});

      if(name=='category'){
        existingShop.category = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})
      }

      if(name=='businessName'){

        existingShop.businessName = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='ownerName'){

        existingShop.ownerName = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='mobileNumber'){

        existingShop.mobileNumber = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})


      }


      if(name=='contactPerson'){

        existingShop.contactPerson = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})


      }


      if(name=='area'){

        existingShop.area = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='location'){

        existingShop.location = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})


      }


      if(name=='street'){

        existingShop.street = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='landmark'){

        existingShop.landmark = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='businessAddress'){

        existingShop.businessAddress = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='businessEmail'){

        
        existingShop.businessEmail = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='businessInformation'){

            
        existingShop.businessInformation = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})


      }


      if(name=='interested'){

        existingShop.interested = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='ownerImage'){

        existingShop.ownerImage = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='website'){

        existingShop.socialSites.website.isWebsite = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})


      }


      if(name=='isInsta'){

        existingShop.socialSites.instagram.isInsta = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='isFacebook'){

        existingShop.socialSites.facebook.isFacebook = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='isYoutube'){

        existingShop.socialSites.youtube.isYoutube = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='monday'){
          
        existingShop.workingHours.monday = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='tuesday'){

        existingShop.workingHours.tuesday = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='wednesday'){

        existingShop.workingHours.wednesday = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='thrusday'){

        existingShop.workingHours.thrusday = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='friday'){

        existingShop.workingHours.friday = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='saturday'){

        existingShop.workingHours.saturday = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='sunday'){

        existingShop.workingHours.sunday = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='mondayToSaturday'){

        existingShop.workingHours.mondayToSaturday = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='paymentStatus'){

        existingShop.paymentStatus = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='cash'){

        existingShop.paymentMode.cash = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='debitAndCreditCards'){

        existingShop.paymentMode.debitAndCreditCards = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='upi'){

        existingShop.paymentMode.upi = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='yearOfEstablished'){

        existingShop.yearOfEstablished = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='gst'){

        existingShop.certification.gst = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='otherthangst'){
        existingShop.certification.other = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})
      }


      if(name=='feedback'){

        existingShop.feedback = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='visitSummary'){

        
        existingShop.visitSummary = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='requestForCorrection'){

        existingShop.requestForCorrection = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='workflowStatus'){

        existingShop.workflowStatus = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='photographervideo'){

        existingShop.visualteam.photographer.video = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='photographerimage'){

        existingShop.visualteam.photographer.image = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='editableTeamvideo'){

        existingShop.visualteam.editableTeam.video = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }


      if(name=='editableTeamimage'){

        existingShop.visualteam.editableTeam.image = value

        await existingShop.save();

        return res.status(200).json({message:"Changed Successfully"})

      }



      break;
    default:
      res.status(400).json({ message: "error" });
  }
};
