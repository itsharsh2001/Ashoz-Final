import dbConnect from '../../../lib/dbConnect'
import fs from 'fs'
import { nanoid } from 'nanoid'
import AWS from 'aws-sdk'
const awsConfig = {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY,
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    apiVersion: process.env.NEXT_PUBLIC_AWS_API_VERSION,
  }
  const S3 = new AWS.S3(awsConfig)
 
import formidable from 'formidable'

export const config = {
    api: {
      bodyParser: false,
    },
  };


export default async (req, res) => {
    const { method } = req;
   
    switch (method) {

        case 'POST':
     
                const form = new formidable.IncomingForm();
                form.parse(req, (err, fields, files) => {

                  const params = {
                    Bucket: 'ashoz',
                    Key: `${nanoid()}.${files.pdf.mimetype.split('/')[1]}`,
                    Body: fs.readFileSync(files.pdf.filepath),
                    ACL: 'public-read',
                    ContentType: files.pdf.mimetype,
                  }
              
              
                  // upload to s3
                  S3.upload(params, (err, data) => {
                    if (err) {
                      console.log(err);
                      return res.status(400).json({ message: 'error' })
                    }
                    return res.status(200).json({ message: data.Location })
                    
                  })

                });
        
            break;
        default:
            res.status(400).json({ message: "error" })
    }
}
