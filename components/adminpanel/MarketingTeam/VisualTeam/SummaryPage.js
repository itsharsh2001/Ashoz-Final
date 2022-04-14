import classes from './SummaryPage.module.css'
import SideBar from '../../../UI/SideBar'
import Summary from './Summary'

export default function SummaryPage() {
    return (
        <div className={classes.summarypage} >
            <SideBar agent={false} superAdmin={false} visualTeam={true} marketingAdmin={false} webDeveloper={false}/>
            <Summary/>
        </div>
    )
}
