import {Row, Col} from 'react-bootstrap';
import { GeoAlt, Search } from 'react-bootstrap-icons';

export const WeatherCard = ({location, condition, temperature, high, low}) => {
  return (
        <Col  sm={12} md={4}>
            <div className="weather-card">
                <div className="search-box">
                    < GeoAlt />
                    <input type="text" placeholder="Location" />
                    <button>< Search /></button>
                </div>

                <div className="not-found">
                    <h2>Invalid Location!</h2>
                </div>

                <div className="weather-box">

                </div>
            </div>
        </Col>
        

  )
}

export default WeatherCard

