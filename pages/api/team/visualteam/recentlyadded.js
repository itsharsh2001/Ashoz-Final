import dbConnect from "../../../../lib/dbConnect";
import Shop from "../../../../models/Shop";
dbConnect();


export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":

      let date = new Date()
      let day = date.getDate();
      let month = date.getMonth()+1;
      let year = date.getFullYear();

      let fullDate = `${day}.${month}.${year}.`;

      const data = await Shop.find({'paymentMode.date' : fullDate,
      paymentStatus:'true'
    });
      

      return res.status(200).json({message:data,recentAddedlength:data.length})


      break;
    default:
      res.status(400).json({ message: "error" });
  }
};

