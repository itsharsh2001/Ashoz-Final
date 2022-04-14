import dbConnect from "../../../lib/dbConnect";
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers'

dbConnect();
var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default NextAuth(
    {
        session:{
            jwt:true,
        },
        providers:[
            Providers.Credentials({
                async authorize(credentials){

                    if(!emailRegex.test(credentials.email)){
                        throw new Error('Enter Valid Email')
                    }
            
        
                    if(credentials.email != process.env.NEXT_PUBLIC_ADMIN_EMAIL){
                        throw new Error('Invalid Credentials')
                    }
        
                    if(credentials.password != process.env.NEXT_PUBLIC_ADMIN_PASSWORD){
                        throw new Error('Invalid Credentials')
                    }
            
                    return {email: 'admin@gmail.com'}
                }
            })
        ]
    
    }
    );