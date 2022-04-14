import classes from './TotalShops.module.css'
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchField from '../../UI/SearchField'
import RedButton from '../../UI/RedButton'
import TableBody from './TableBody'
import MenuIcon from '@mui/icons-material/Menu';
import { useSession, signOut } from 'next-auth/client'
import {useRouter} from 'next/router'
import {useState} from 'react'


export default function TotalShops(props) {

    const [searchItem, setSearchItem] = useState('');

    const router = useRouter();

    const logoutButtonHandler = ()=>{
      signOut();
      router.replace('/adminpanel/marketing-agent/signin')
    }
    const inputHandler = (e) => {
        const value = e.target.value;
        setSearchItem(value)
    }
    
    return (
        <div className={classes.totalshops} >
            <nav>
                <div>
                    <SearchField onChange={inputHandler} placeholder="Search by any order parameter..." />
                    <RedButton>Search</RedButton>
                </div>
                <div>
                    <RedButton className={classes.add} onClick={logoutButtonHandler}>Logout</RedButton> 
                    <SettingsIcon className={classes.settings} />
                </div>
            </nav>
            <nav className={classes.hamburger} >
            <MenuIcon onClick={props.hamburgerHandler} className={classes.settings}/>
            <img src="/without_tagline.png" alt="Logo" />
            <SettingsIcon className={classes.settings}/>
            </nav>
            {/* <TableHeader/> */}
            <TableBody search={searchItem} data={props.data}/>
        </div>
    )
}
