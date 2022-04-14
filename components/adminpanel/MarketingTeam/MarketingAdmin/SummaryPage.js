import classes from './SummaryPage.module.css'
import SideBar from '../../../UI/SideBar'
import Summary from './Summary'

export default function SummaryPage() {
    return (
        <div className={classes.summarypage} >
            <SideBar agent={false} superAdmin={false} visualTeam={false} marketingAdmin={true} webDeveloper={false}/>
            <Summary/>
        </div>
    )
}
