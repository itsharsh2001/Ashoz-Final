import classes from './Summary.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from '../../../UI/Card';
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchField from "../../../UI/SearchField";
import RedButton from "../../../UI/RedButton";
// import Card from "../../../UI/Card";
import MenuIcon from "@mui/icons-material/Menu";
import Link from 'next/link';
import {useState,useEffect} from 'react'

export default function Summary(props) {


  const [recentlyAdded, setRecentlyAdded] = useState(0);
  const [capturePending, setCapturePending] = useState(0);
  const [imageEditingPending, setEditingPending] = useState(0);

  const gettingDetails = async()=>{
    try
    {
      const {data} = await axios.get('/api/team/visualteam/recentlyadded');
      setRecentlyAdded(data.recentAddedlength)
  }
    catch(error){
      console.log(error)
    }


    try{

      const {data} = await axios.get('/api/team/image-capture-pending');
      setCapturePending(data.captureImagePendinglength)

    }catch(error){
      console.log(error)
    }

    try{

      const {data} = await axios.get('/api/team/image-editing-pending');
      setEditingPending(data.editableImagelength)

    }catch(error){
      console.log(error)
    }


  }



  useEffect(()=>{

    gettingDetails();

  },[])


    return (
        <div className={classes.summary} >
            <div><ArrowBackIcon className={classes.icon} /></div>
            <span>Reports</span>

            {/* <nav>
        <div>
          <SearchField placeholder="Search by any order parameter..." />
          <RedButton>Search</RedButton>
        </div>
        <div>
          <RedButton className={classes.add}>Log Out</RedButton>
          <SettingsIcon className={classes.settings} />
        </div>
      </nav> */}
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
        <span>
          <Card background="F6F6FB">
            <h4>{recentlyAdded}</h4>
            <p>Recently Added</p>
          </Card>
          {/* <h6>More Info</h6> */}
        </span>
        </Link>



        <span>
          <Card background="FDF5F3">
            <h4>90</h4>
            <p>Total Leads</p>
          </Card>
          {/* <h6>More Info</h6> */}
        </span>
        <Link href='/adminpanel/marketing-team/visual-team/imagecapturepending'>
        <span>
          <Card background="FFFAF4">
            <h4>{capturePending}</h4>
            <p>Captures Pending</p>
          </Card>
          {/* <h6>More Info</h6> */}
        </span>
        </Link>

      
        <span>
          <Card background="F6F6FB">
            <h4>10</h4>
            <p>Captures Done</p>
          </Card>
          {/* <h6>More Info</h6> */}
        </span>
       

        <Link href='/adminpanel/marketing-team/visual-team/imageeditingpending'>
        <span>
          <Card background="F6F6FB">
            <h4>{imageEditingPending}</h4>
            <p>Edits Pending</p>
          </Card>
          {/* <h6>More Info</h6> */}
        </span>
        </Link>


        <span>
          <Card background="F6F6FB">
            <h4>10</h4>
            <p>Edits Done</p>
          </Card>
          {/* <h6>More Info</h6> */}
        </span>
      </section>
        </div>
    )
}
