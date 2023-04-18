import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { Cloud, GeoAlt, Search } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';
import * as Icons from 'react-bootstrap-icons';
import axios from 'axios';



function Weather() {

    const [locationData, setLocationData] = useState({});

    const [location, setLocation] = useState('');

    const weatherCall = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=624d8b7af3c3178ec192f45b37847c2a`;

    const apiCall = () => {
        axios.get(weatherCall).then((response) => {
            setLocationData(response.data);
            console.log(response.data);
        })
        setLocation('');
    }

    const [currentTemp, setCurrentTemp] = useState(0);
    const [feelsLike, setFeelsLike] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [windSpeed, setWindSpeed] = useState(0);
    const [temperatureScale, setTemperatureScale] = useState("°F");
    const [speedScale, setSpeedScale] = useState("MPH");
    const [weatherCondition, setWeatherCondition] = useState('BrightnessHigh');
    
    const handleTemperatureSwitch = (e) => {
        if(e) {
            setTemperatureScale("°C");
            setSpeedScale("MPS");
        } else {
            setTemperatureScale("°F");
            setSpeedScale("MPH");
        }
    }

    const handleLightSwitch = (e) => {
        console.log(e);
    }

    const weatherConditionIcon = {
        Clouds: < Icons.Clouds size="10rem" className="my-5" />,
        Clear: < Icons.BrightnessHigh size="10rem" className="my-5" />,
        Thunderstorm: < Icons.CloudLightningRain size="10rem" className="my-5" />,
        Drizzle: < Icons.CloudDrizzle size="10rem" className="my-5" />,
        Rain: < Icons.CloudRainHeavy size="10rem" className="my-5" />,
        Snow: < Icons.Snow2 size="10rem" className="my-5" />,
        Mist: < Icons.CloudHaze size="10rem" className="my-5" />,
        Smoke: < Icons.CloudHaze size="10rem" className="my-5" />,
        Haze: < Icons.CloudHaze size="10rem" className="my-5" />,
        Dust: < Icons.CloudHaze size="10rem" className="my-5" />,
        Fog: < Icons.CloudHaze size="10rem" className="my-5" />,
        Sand: < Icons.CloudHaze size="10rem" className="my-5" />,
        Ash: < Icons.CloudHaze size="10rem" className="my-5" />,
        Squall: < Icons.CloudHaze size="10rem" className="my-5" />,
        Tornado: < Icons.Tornado size="10rem" className="my-5" />
    }

    useEffect(() => {
        // DETERMINING WEATHER CONDITION
        if (locationData['weather']?.[0]) {
            setWeatherCondition(locationData['weather'][0].main);
        } else {
            setWeatherCondition("BrightnessHigh");
        }
        // SETTING MAIN DATA
        if(locationData['main']?.['temp']) {
            const currentTempK = locationData['main']['temp'];
            const feelsLikeK = locationData['main']['feels_like'];
            if ( temperatureScale === "°F") {
                setCurrentTemp(((currentTempK - 273.15) * (9/5) + 32).toFixed(0));
                setFeelsLike(((feelsLikeK - 273.15) * (9/5) + 32).toFixed(0))
            } else if ( temperatureScale === "°C") {
                setCurrentTemp(((currentTempK - 273.15)).toFixed(0));
                setFeelsLike(((feelsLikeK - 273.15)).toFixed(0));
            } else {
                setCurrentTemp(0);
                setFeelsLike(0);
            }
            setHumidity(locationData['main']['humidity']);
        }
        // SETTING WINDSPEED
        if (locationData['wind']?.['speed']) {
            const currentWind = locationData['wind']['speed'];
            if(speedScale === "MPH") {
                setWindSpeed((currentWind / 0.447).toFixed(0));
            } else {
                setWindSpeed((currentWind).toFixed(0));
            }
        }
    }, [locationData, temperatureScale])
    


  return (
    <Container fluid className="weather">
        <div className="top-container">
            {/* TOGGLE SWITCH FOR DARK AND LIGHT MODE */}
            {/* <div className="lighting-mode-switch">
                <p className='mx-2'>< Icons.Moon /></p>
                <Form.Check
                    type="switch"
                    id="light-mode"
                    className="light-mode-switch"
                    onChange={(e) => handleLightSwitch(e.target.checked)}
                />
                <p className="mx-2">< Icons.Sun /></p>
            </div> */}
            {/* TOGGLE SWITCH FOR FAHRENHEIT AND CELCIUS  */}
            <div className="degrees-switch">
                <p className='mx-2'>Imperial</p>
                <Form.Check
                    type="switch"
                    id="degrees"
                    className="degree-switch"
                    onChange={(e) => handleTemperatureSwitch(e.target.checked)}
                />
                <p className="mx-2">Metric</p>
            </div>   
        </div>
       
        {/* WEATHER CARD DEPICTING INFORMATION */}
        <Card>
            <Card.Body className=''>
                <Card.Title className='mb-0 mb-md-5'>
                   
                <Row className='search-box'>
                    <Col size={2} className='mx-2'>
                        < GeoAlt />
                    </Col>
                    <Col size={8} className='mx-2'>
                        <input
                        type="text"
                        placeholder="Enter Location"
                        onChange={e => setLocation(e.target.value)}
                        />
                    </Col>
                    <Col size={2} className='mx-2'>
                        <button onClick={apiCall}>< Search /></button>
                    </Col>
                </Row>
                    
                </Card.Title>
                <Card.Subtitle className='py-5'>
                    <Row>
                        <Col className='card-main'>
                            { weatherConditionIcon[weatherCondition] }
                        </Col>
                    </Row>
                    <Row>
                        <Col className='card-main'>
                            <h1 className="current-temp">{currentTemp}{temperatureScale}</h1>
                        </Col>
                    </Row>
                </Card.Subtitle>
                <Container fluid className="mt-5 pb-5">
                    <Row>
                        <Col size={4} className="text-center">
                            <h4 className="bold">{feelsLike}{temperatureScale}</h4>
                            <h4>Feels Like</h4>
                        </Col>
                        <Col size={4} className="text-center">
                            <h4 className="bold">{humidity}%</h4>
                            <h4>Humidity</h4>
                        </Col>
                        <Col size={4} className="text-center">
                            <h4 className="bold">{windSpeed}{speedScale}</h4>
                            <h4>Wind Speed</h4>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default Weather