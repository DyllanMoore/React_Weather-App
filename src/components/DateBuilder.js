export function DateBuilder(props) {
    const day = props.day;
    const month = props.month;
    const year = props.year;
    const date = props.date;


    return (
        <div>
            <h2>Today is {day}, {month} {date}, {year}.</h2>
        </div>
    )
}