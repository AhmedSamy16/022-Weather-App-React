

const Details = ({ name, country, degrees, condition }) => {
    const dateBuilder = (d) => {
        const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = DAYS[d.getDay()]
        let date = d.getDate()
        let month = MONTHS[d.getMonth()]
        let year = d.getFullYear()
        return `${day} ${date} ${month} ${year}`
    }
    return (
        <>
        <div className="location-box">
            <p className="location">{name}, {country}</p>
            <p className="date">{dateBuilder(new Date())}</p>
        </div>
        <div className="weather-box">
            <p className="temp">{degrees}°c</p>
            <p className="weather">{condition}</p>
        </div>
        </>
    )
}

export default Details