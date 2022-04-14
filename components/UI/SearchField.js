import classes from './SearchField.module.css'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchField(props) {
    
    return (
        <div className={classes.input}>
            <SearchIcon style={{color:'var(--dashboard_red)',width:'10%',paddingLeft:'10px',cursor:'pointer',fontSize:'25px'}} />
            <input onChange={props.onChange} type="text" placeholder={`${props.placeholder}`} />
        </div>
    )
}
