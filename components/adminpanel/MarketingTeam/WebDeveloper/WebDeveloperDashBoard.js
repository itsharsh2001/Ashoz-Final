import classes from "./WebDeveloperDashBoard.module.css";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchField from "../../../UI/SearchField";
import RedButton from "../../../UI/RedButton";
import Card from "../../../UI/Card";
import TableBody from "./TableBody";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import MenuIcon from "@mui/icons-material/Menu";
import { useSession, signOut } from 'next-auth/client'
import {useRouter} from 'next/router'
import {useState,useEffect} from 'react'
import axios from 'axios'



export default function TotalShops(props) {
  const [searchItem, setSearchItem] = useState('');
  const [recentAdded, setRecentAdded] = useState(0)

  const router = useRouter();

  const logoutButtonHandler = ()=>{
    signOut();
    router.replace('/adminpanel/marketing-agent/signin')
  }

  const inputHandler = (e) => {
    const value = e.target.value;
    setSearchItem(value)
}

const gettingDetails = async()=>{
  try{

      const {data} = await axios.get('/api/team/webdeveloper/recentlyadded');
      setRecentAdded(data.recentAddedlength)

  }catch(error){
    console.log(error.response.data.message)
  }
}

useEffect(()=>{
  gettingDetails();
})

  return (
    <div className={classes.totalshops}>
      <nav>
        <div>
          <SearchField onChange={inputHandler}  placeholder="Search by any order parameter..." />
          <RedButton>Search</RedButton>
        </div>
        <div>
          <RedButton onClick={logoutButtonHandler} className={classes.add}>Log Out</RedButton>
          <SettingsIcon className={classes.settings} />
        </div>
      </nav>
      <nav className={classes.hamburger}>
        <MenuIcon
          onClick={props.hamburgerHandler}
          className={classes.settings}
        />
        <img src="/without_tagline.png" alt="Logo" />
        <SettingsIcon className={classes.settings} />
      </nav>

      <section>
        <span>
          <Card background="F6F6FB">
            <h4>{recentAdded}</h4>
            <p>Recently Added</p>
          </Card>
        </span>
        <span>
          <Card background="FDF5F3">
            <h4>40</h4>
            <p>Deployment Pending</p>
          </Card>
        </span>
        <span>
          <Card background="F6F6FB">
            <h4>25</h4>
            <p>Deployment Completed</p>
          </Card>
        </span>
      </section>

      <TableBody search={searchItem} data={props.data}/>
    </div>
  );
}
