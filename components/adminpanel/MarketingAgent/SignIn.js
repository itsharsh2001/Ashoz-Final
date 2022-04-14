import classes from "./SignIn.module.css";
import {useRouter} from 'next/router'
import { signIn } from 'next-auth/client';
import {useState} from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default function SignIn() {

  const router = useRouter();
  const [ email, setEmail] = useState(null);
  const [ password, setPassword] = useState(null)

  async function loginHandlerButton() {
  const result = await signIn('credentials',{
    redirect:false,
    email,
    password 
    });

    if(result.error){
      toast(result.error)
    }

    if(!result.error){
      router.push('/adminpanel/super-admin/dashboard')
    }

    }


  return (
    <div className={classes.signin}>
      <main>
        <img src="/without_tagline.png" alt="Logo" />
        <h3>Sign In</h3>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
          id="email"
          placeholder="Your Email"
        />
        <section>
          <label htmlFor="password">Password</label>
          <p>Forget Password?</p>
        </section>
        <input
          type="password"
          name="password"
          onChange={(e)=>setPassword(e.target.value)}
          id="password"
          placeholder="Your Password"
        />
        <span>
          <input type="checkbox" name="keeploginin" id="keeploginin" />
          <label htmlFor="keeploginin">Keep me Logged In</label>
        </span>
        <button onClick={loginHandlerButton}>Sign In</button>
      </main>
      <img className={classes.rightimage} src="/rightimage.png" alt="Banner Image" />
    </div>
  );
}
