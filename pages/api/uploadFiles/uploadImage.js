import dbConnect from '../../../lib/dbConnect'
import { nanoid } from 'nanoid'
import AWS from 'aws-sdk'
const awsConfig = {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY,
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    apiVersion: process.env.NEXT_PUBLIC_AWS_API_VERSION,
  }
  const S3 = new AWS.S3(awsConfig)

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '5mb' // Set desired value here
        }
    }
}



export default async (req, res) => {
    const { method } = req;
   
    switch (method) {

        case 'POST':

            const { image } = req.body

             // we are removing extra part in image
            const base64Data = new Buffer.from(image.replace(/^data:image\/\w+;base64,/, ''), 'base64');

            // we are getting jpeg
            const type = image.split(';')[0].split('/')[1];
          
              // image params
            const params = {
                Bucket: 'ashoz',
                Key: `${nanoid()}.${type}`,
                Body: base64Data,
                ACL: 'public-read',
                contentEncoding: 'base64',
                ContentType: `/image/${type}`
            }

              S3.upload(params, async (err, data) => {
                if (err) {
                  return res.status(400).json({ message: 'Aws problem' })
                }

                return res.status(200).json({message:data.Location})


              })


            
        
            break;
        default:
            res.status(400).json({ message: "error" })
    }
}
