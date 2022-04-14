import classes from "./Summary.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Card from "../../../UI/Card";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchField from "../../../UI/SearchField";
import RedButton from "../../../UI/RedButton";
// import Card from "../../../UI/Card";
import MenuIcon from "@mui/icons-material/Menu";

export default function Summary(props) {
  return (
    <div className={classes.summary}>
      <div>
        <ArrowBackIcon className={classes.icon} />
      </div>
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
        <span>
          <Card background="F6F6FB">
            <h4>20</h4>
            <p>Recently Added</p>
          </Card>
          {/* <h6>More Info</h6> */}
        </span>
        <span>
          <Card background="FDF5F3">
            <h4>90</h4>
            <p>Total Leads</p>
          </Card>
          {/* <h6>More Info</h6> */}
        </span>
        <span>
          <Card background="FFFAF4">
            <h4>30</h4>
            <p>Payments Pending</p>
          </Card>
          {/* <h6>More Info</h6> */}
        </span>
        <span>
          <Card background="F6F6FB">
            <h4>40</h4>
            <p>Payments Completed</p>
          </Card>
          {/* <h6>More Info</h6> */}
        </span>
      </section>
    </div>
  );
}
