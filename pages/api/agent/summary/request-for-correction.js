import dbConnect from "../../../../lib/dbConnect";
import Shop from "../../../../models/Shop";
dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":

    const data = await Shop.find({requestForCorrection:true})
    return res.status(200).json({requestlength:data.length,message:data})

      break;
    default:
      res.status(400).json({ message: "error" });
  }
};
