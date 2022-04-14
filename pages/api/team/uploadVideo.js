import dbConnect from "../../../lib/dbConnect";
import Shop from "../../../models/Shop";
dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":

        const {video,email} = req.body;

        const shopAdded = await Shop.findOne({businessEmail:email})

        let date = new Date()
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
  
        let fullDate = `${day}.${month}.${year}.`;
  

        shopAdded.visualteam.photographer.video = video;

        shopAdded.visualteam.photographer.videoStatus = true 

        if(shopAdded.visualteam.photographer.imageStatus){
          shopAdded.workflowStatus = 'Visual Team - Editable Team'
          shopAdded.visualteam.photographer.date = fullDate
        }

        await shopAdded.save();

        return res.status(200).json({message:"Saved Successfully"})

      break;
    default:
      res.status(400).json({ message: "error" });
  }
};
