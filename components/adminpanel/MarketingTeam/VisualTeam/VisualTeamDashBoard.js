import classes from "./VisualTeamDashBoard.module.css";
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
import Link from 'next/link'
import axios from 'axios'
import {useState, useEffect} from 'react'



export default function TotalShops(props) {
  const [searchItem, setSearchItem] = useState('');


  const [recentlyAddedShops, setRecentlyAddedShops] = useState(0);
  const [capturePending, setCapturePending] = useState(0);
  const [editingPending, setEditingPending] = useState(0);

  const router = useRouter();

  const logoutButtonHandler = ()=>{
    signOut();
    router.replace('/adminpanel/marketing-agent/signin')
  }
  const inputHandler = (e) => {
    const value = e.target.value;
    setSearchItem(value)
}
  const gettingData = async() =>{

      try{
        const {data} = await axios.get('http://localhost:3000/api/team/visualteam/recentlyadded');
        setRecentlyAddedShops(data.recentAddedlength)
      }catch(error){
        console.log(error)
      }

  
      try{
        const {data} = await axios.get('http://localhost:3000/api/team/image-capture-pending');
        setCapturePending(data.captureImagePendinglength)
      }catch(error){
        console.log(error)
      }
  
    
      try{
        const {data} = await axios.get('http://localhost:3000/api/team/image-editing-pending');
        setEditingPending(data.editableImagelength)
      }catch(error){
        console.log(error)
      }
 

  }

  useEffect(()=>{
    gettingData();
  },[])



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
        <Link href='/adminpanel/marketing-team/visual-team/recentlyadded'>
        <span style={{cursor:'pointer'}}>
          <Card background="F6F6FB">
            <h4>{recentlyAddedShops}</h4>
            <p>Recently Added</p>
          </Card>
        </span>
        </Link>

        <Link href='/adminpanel/marketing-team/visual-team/imagecapturepending'>
        <span style={{cursor:'pointer'}}>
          <Card background="FDF5F3">
            <h4>{capturePending}</h4>
            <p>Image Captures Pending</p>
          </Card>
        </span>
        </Link>

        <Link href='/adminpanel/marketing-team/visual-team/imageeditingpending'>
        <span style={{cursor:'pointer'}}>
          <Card background="F6F6FB">
            <h4>{editingPending}</h4>
            <p>Image Edits Pending</p>
          </Card>
        </span>
        </Link>
      </section>

      <TableBody search={searchItem} data={props.data}/>
    </div>
  );
}
