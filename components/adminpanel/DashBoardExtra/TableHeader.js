import classes from './TableHeader.module.css'

export default function TableHeader() {
    return (
        <div className={classes.tablewrapper}>
            <section className={classes.table}>
                <h4>S.No</h4>
                <h4>Name</h4>
                <h4>Cateogry</h4>
                <h4>Number</h4>
                <h4>Contact Person</h4>
                <h4>Address</h4>
                <h4>Date</h4>
                <h4></h4>
            </section>
        </div>
    )
}
