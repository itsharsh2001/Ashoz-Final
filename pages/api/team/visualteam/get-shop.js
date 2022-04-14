import dbConnect from "../../../../lib/dbConnect";
import Shop from "../../../../models/Shop";


dbConnect();
let emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":

    const allShops = await Shop.find({paymentStatus:true});
    return res.status(200).json({message:allShops,shoplength:allShops.length})

    break;

    default:
      res.status(400).json({ message: "error" });
  }
};
