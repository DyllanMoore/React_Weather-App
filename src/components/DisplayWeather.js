export function DisplayWeather(props) {
    return (
        <div className="WeatherDisplay">
            <h1>{props.city}, {props.country}</h1>
            <h2 className="WeatehrData">Temperature: {props.temperature}&#176;F</h2>
            <h2 className="WeatehrData">Precipitation: {props.precipitation} in.</h2>
            <h2 className="WeatehrData">Wind Speed: {props.wind}mph</h2>
            <h2 className="WeatehrData">Cloud Coverage: {props.cloud} %</h2>
        </div>
    )
}