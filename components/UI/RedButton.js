import classes from './RedButton.module.css'

export default function RedButton(props) {
    return (
        <button onClick={props.onClick} className={classes.button}>
            {props.children}
        </button>
    )
}
