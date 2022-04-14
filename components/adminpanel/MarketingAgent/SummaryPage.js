import classes from './SummaryPage.module.css'
import SideBar from '../../UI/SideBar'
import Summary from '../DashBoardExtra/Summary'

export default function SummaryPage() {
    return (
        <div className={classes.summarypage} >
            <SideBar agent={true} superAdmin={false} visualTeam={false} marketingAdmin={false} webDeveloper={false}/>
            <Summary/>
        </div>
    )
}
