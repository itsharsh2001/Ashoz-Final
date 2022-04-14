import classes from "./SideBar.module.css";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import GridViewIcon from "@mui/icons-material/GridView";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ArticleIcon from "@mui/icons-material/Article";
import Link from "next/link";
export default function SideBar(props) {
  const [agent, setAgent] = useState(props.agent);
  const [superAdmin, setSuperAdmin] = useState(props.superAdmin);
  const [visualTeam, setVisualTeam] = useState(props.visualTeam);
  const [marketingAdmin, setMarketingAdmin] = useState(props.marketingAdmin);
  const [webDeveloper, setWebDeveloper] = useState(props.webDeveloper);

  return (
    <div className={classes.sidebar}>
      {agent ? (
        <>
          <section>
            <img src="/without_tagline.png" alt="logo" />
            <Link href="/adminpanel/marketing-agent/dashboard" >
            <h4>
              <span></span>
              <GridViewIcon
                style={{ color: "var(--dashboard_red)", marginRight: "5%" }}
              />
              Dashboard
            </h4>
            </Link>
            <Link href="/adminpanel/marketing-agent/addshop" >
            <h4>
              <span></span>
              <AddIcon
                style={{ color: "var(--dashboard_red)", marginRight: "5%" }}
              />
              Add Shop
            </h4>
            </Link>
            <Link href="/adminpanel/marketing-agent/summary">
              <h4>
                <span></span>
                <SummarizeIcon
                  style={{ color: "var(--dashboard_red)", marginRight: "5%" }}
                />
                Summary
              </h4>
            </Link>
          </section>
          <span>
            <img src="/rightimage.png" alt="profile photo" />
            <h6>Marketing Executive</h6>
            <p>-Rajesh Kumar</p>
          </span>
        </>
      ) : null}

      {visualTeam ? (
        <>
          <section>
            <img src="/without_tagline.png" alt="logo" />
            <Link href="/adminpanel/marketing-team/visual-team/dashboard">
            <h4>
              <span></span>
              <GridViewIcon
                style={{ color: "var(--dashboard_red)", marginRight: "5%" }}
              />
              Dashboard
            </h4>
            </Link>
            {/* <Link href="/adminpanel/marketing-team/visual-team/report">
            <h4>
              <span></span>
              <ArticleIcon
                style={{ color: "var(--dashboard_red)", marginRight: "5%" }}
              />
              Reports
            </h4>
            </Link> */}
          </section>
          <span>
            <img src="/rightimage.png" alt="profile photo" />
            <h6>visual Team</h6>
            <p>-Rajesh Kumar</p>
          </span>
        </>
      ) : null}

      {marketingAdmin ? (
        <>
          <section>
            <img src="/without_tagline.png" alt="logo" />
            <Link href="/adminpanel/marketing-team/marketing-admin/dashboard">
            <h4>
              <span></span>
              <GridViewIcon
                style={{ color: "var(--dashboard_red)", marginRight: "5%" }}
              />
              Dashboard
            </h4>
            </Link>
            <Link href="/adminpanel/marketing-team/marketing-admin/report">
            <h4>
              <span></span>
              <ArticleIcon
                style={{ color: "var(--dashboard_red)", marginRight: "5%" }}
              />
              Reports
            </h4>
            </Link>
          </section>
          <span>
            <img src="/rightimage.png" alt="profile photo" />
            <h6>Marketing Admin</h6>
            <p>-Rajesh Kumar</p>
          </span>
        </>
      ) : null}

      {webDeveloper ? (
        <>
          <section>
            <img src="/without_tagline.png" alt="logo" />
            <Link href="/adminpanel/marketing-team/web-developer/dashboard">
            <h4>
              <span></span>
              <GridViewIcon
                style={{ color: "var(--dashboard_red)", marginRight: "5%" }}
              />
              Dashboard
            </h4>
            </Link>
            {/* <Link href="/adminpanel/marketing-team/web-developer/report">
            <h4>
              <span></span>
              <ArticleIcon
                style={{ color: "var(--dashboard_red)", marginRight: "5%" }}
              />
              Reports
            </h4>
            </Link> */}
          </section>
          <span>
            <img src="/rightimage.png" alt="profile photo" />
            <h6>Web Developer</h6>
            <p>-Rajesh Kumar</p>
          </span>
        </>
      ) : null}

      {superAdmin ? (
        <>
          <section>
            <img src="/without_tagline.png" alt="logo" />
            <Link href="/adminpanel/super-admin/dashboard">
            <h4>
              <span></span>
              <GridViewIcon
                style={{ color: "var(--dashboard_red)", marginRight: "5%" }}
              />
              Dashboard
            </h4>
            </Link>
          </section>
          <span>
            <img src="/rightimage.png" alt="profile photo" />
            <h6>Owner</h6>
            <p>-Rajesh Kumar</p>
          </span>
        </>
      ) : null}
    </div>
  );
}
