import React from 'react'
import WeatherTable from './WeatherTable';
import {
    Row,
    Col,
    InputGroup,
    Input,
    InputGroupAddon, Button, FormGroup
} from 'reactstrap';


class Weather extends React.Component {

    state = {
        weather: null,
        cityList: [],
        newCityName: ''
    };

    // lifecycle method
    componentDidMount () {
        this.getCityList();
    }

    getCityList = () => {
        fetch('/api/cities')
            .then(res => res.json())
            .then(res => {
                let cityList = res.map(r => r.city_name);
                this.setState({ cityList });
            })
    };

    handleInputChange = (e) => {
        this.setState({ newCityName: e.target.value });
    };

    handleAddCity = () => {
        fetch('/api/cities', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ city: this.state.newCityName })
        })
            .then(res => res.json())
            .then(res => {
                this.getCityList();
                this.setState({ newCityName: '' });
            })
    };

    getWeather = (city) => {
        fetch(`/api/weather/${city}`)
            .then(res => res.json())
            .then(weather => {
                console.log(weather);
                this.setState({ weather });
            })
    };

    handleChangeCity = (e) => {
        this.getWeather(e.target.value);
    };

    render() {
        return (
            <div>
                <InputGroup>
                    <Input placeholder = "New city name..."
                           value = { this.state.newCityName }
                           onChange={ this.handleInputChange }>
                    </Input>
                    <InputGroupAddon addonType="append">
                        <Button color="primary" onClick={this.handleAddCity}>Add City</Button>
                    </InputGroupAddon>
                </InputGroup>
                <Row>
                    <Col>
                        <h1 className="display-5">Current Weather</h1>
                        <FormGroup>
                            <Input type="select" onChange={this.handleChangeCity}>
                                { this.state.cityList.length === 0 && <option>No cities added yet.</option> }
                                { this.state.cityList.length > 0 && <option>Select a city.</option> }
                                { this.state.cityList.map((city, i) => <option key={i}>{city}</option>) }
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <WeatherTable data={this.state.weather}/>
            </div>
        )
    }
}

export default Weather;