import classes from "./SuperAdminDashBoard.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Card from "../../UI/Card";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchField from "../../UI/SearchField";
import RedButton from "../../UI/RedButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useSession, signOut } from 'next-auth/client'
import {useRouter} from 'next/router'
import Link from 'next/link'

export default function SuperAdminDashBoard(props) {
  const router = useRouter();

  const logoutButtonHandler = ()=>{
    signOut();
    router.replace('/adminpanel/marketing-agent/signin')
  }



  return (
    <div className={classes.summary}>
      {/* <div>
        <ArrowBackIcon className={classes.icon} />
      </div> */}
      <span>Super Admin DashBoard <div>
          <RedButton onClick={logoutButtonHandler} className={classes.add}>Log Out</RedButton>
          <SettingsIcon className={classes.settings} />
        </div> </span>

      {/* <nav className={classes.firstnav}>
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
        <span>
          <Card background="F6F6FB">
            <h4>20</h4>
            <p>Admins</p>
          </Card>
          {/* <h6>More Info</h6> */}
        </span>
        <span>
          <Card background="FDF5F3">
            <h4>90</h4>
            <p>Agents</p>
          </Card>
          {/* <h6>More Info</h6> */}
        </span>
        <Link href='/adminpanel/super-admin/totalShops'>
        <span>
          <Card background="FFFAF4">
            <h4>40</h4>
            <p>Total Shops</p>
          </Card>
          {/* <h6>More Info</h6> */}
        </span>
        </Link>
        <span>
          <Card background="F6F6FB">
            <h4>Click!</h4>
            <p>Add Admin</p>
          </Card>
          {/* <h6>More Info</h6> */}
        </span>
        <span>
          <Card background="F6F6FB">
            <h4>Click!</h4>
            <p>Add Agent</p>
          </Card>
          {/* <h6>More Info</h6> */}
        </span>
        <span>
          <Card background="F6F6FB">
            <h4>Click!</h4>
            <p>Add Shop</p>
          </Card>
          {/* <h6>More Info</h6> */}
        </span>
      </section>
    </div>
  );
}
