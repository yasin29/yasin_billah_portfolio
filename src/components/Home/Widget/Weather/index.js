import React from "react";
import apiKeys from "./apikeys";
import ReactAnimatedWeather from "react-animated-weather";
import Forcast from "./forcast";
import './index.scss'
const defaults = {
    color: "yellow",
    size: 30,
    animate: true,
};
class Weather extends React.Component {
    state = {
        lat: undefined,
        lon: undefined,
        errorMessage: undefined,
        temperatureC: undefined,
        temperatureF: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: "CLEAR_DAY",
        sunrise: undefined,
        sunset: undefined,
        errorMsg: undefined,
    };

    componentDidMount() {
        if (navigator.geolocation) {
            this.getPosition()
                //If user allow location service then will fetch data & send it to get-weather function.
                .then((position) => {
                    this.getWeather(position.coords.latitude, position.coords.longitude);
                })
                .catch((err) => {
                    //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
                    this.getWeather(28.67, 77.22);
                    alert(
                        "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
                    );
                });
        } else {
            alert("Geolocation not available");
        }

        this.timerID = setInterval(
            () => this.getWeather(this.state.lat, this.state.lon),
            600000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    getPosition = (options) => {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    };
    getWeather = async (lat, lon) => {
        const api_call = await fetch(
            `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`
        );
        const data = await api_call.json();
        this.setState({
            lat: lat,
            lon: lon,
            city: data.name,
            temperatureC: Math.round(data.main.temp),
            temperatureF: Math.round(data.main.temp * 1.8 + 32),
            humidity: data.main.humidity,
            main: data.weather[0].main,
            country: data.sys.country,
            // sunrise: this.getTimeFromUnixTimeStamp(data.sys.sunrise),

            // sunset: this.getTimeFromUnixTimeStamp(data.sys.sunset),
        });
        switch (this.state.main) {
            case "Haze":
                this.setState({ icon: "CLEAR_DAY" });
                break;
            case "Clouds":
                this.setState({ icon: "CLOUDY" });
                break;
            case "Rain":
                this.setState({ icon: "RAIN" });
                break;
            case "Snow":
                this.setState({ icon: "SNOW" });
                break;
            case "Dust":
                this.setState({ icon: "WIND" });
                break;
            case "Drizzle":
                this.setState({ icon: "SLEET" });
                break;
            case "Fog":
                this.setState({ icon: "FOG" });
                break;
            case "Smoke":
                this.setState({ icon: "FOG" });
                break;
            case "Tornado":
                this.setState({ icon: "WIND" });
                break;
            default:
                this.setState({ icon: "CLEAR_DAY" });
        }
    };

    render() {
        if (this.state.temperatureC) {
            return (
                <React.Fragment>
                    <div className="city">
                        <div className="title">
                            <h2 style={{ color: "white" }}>{this.state.city}</h2>
                            <h3 style={{ color: "white" }}>{this.state.temperatureC}??<span>C</span></h3>
                        </div>

                        <div style={{ color: "white" }} className="date-time">
                            <div>
                                <h3>
                                    {this.state.country}
                                </h3>
                                {/* <span className="slash">/</span>
                {this.state.temperatureF} &deg;F */}
                            </div>
                        </div>
                        <div className="mb-icon">
                            {" "}
                            <ReactAnimatedWeather
                                icon={this.state.icon}
                                color={defaults.color}
                                size={defaults.size}
                                animate={defaults.animate}
                            />
                        </div>
                    </div>
                    <Forcast icon={this.state.icon} weather={this.state.main} />
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <h3 style={{ color: "white", fontSize: "22px", fontWeight: "600" }}>
                        Detecting your location
                    </h3>
                    <h3 style={{ color: "white", marginTop: "10px" }}>
                        Your current location wil be displayed on the App <br></br> & used
                        for calculating Real time weather.
                    </h3>
                </React.Fragment>
            );
        }
    }
}


export default Weather;