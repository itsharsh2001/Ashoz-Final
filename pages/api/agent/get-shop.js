import dbConnect from "../../../lib/dbConnect";
import Shop from "../../../models/Shop";

dbConnect();
let emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
     const {
         email
     }
     = req.body;
    
      const existingShop = await Shop.findOne({businessEmail:email});

      return res.status(200).json({ message: existingShop});

      break;
    default:
      res.status(400).json({ message: "error" });
  }
};
