import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import InfoBox from './InfoBox';

export default function SearchBox({updateInfo}){
    let [City,setCity] = useState("");
    let [Error, setError]=useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    // ?q={city name}&appid={API key}
    const API_KEY = "5381491d49a36c530baf41376498fc86";

    let GetWeatherInfo = async () => {
        try{
            let respo = await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
            let jsonrespo = await respo.json();
            console.log(jsonrespo);
    
    
            let result = {
                city: City,
                temp: jsonrespo.main.temp,
                tempMin: jsonrespo.main.temp_min,
                tempMax: jsonrespo.main.temp_max,
                humidity: jsonrespo.main.humidity,
                feelslike: jsonrespo.main.feels_like,
                weather: jsonrespo.weather[0].description,
            };
            console.log(result);
    
            return result;
        } catch(err){
            throw err;
        }
    };
    
    
    
    let handleCity =  (event) => {
        setCity(event.target.value);
        
    };
    
    let handleSubmit = async (evt) => {
        try{
            setError(false);
            evt.preventDefault();
            console.log(City);
            setCity("");
            let newInfo = await GetWeatherInfo();
            updateInfo(newInfo);

        }catch(err){
            setError(true);
        }

    };
    return(
        <div>
            <h1 style={{fontSize:50}}>Weather App</h1>
            <TextField 
                id="City" 
                label="City Name" 
                variant="outlined" 
                required
                value={City} 
                onChange={handleCity}

            />
            <br/>
            <br/>
            <Button 
                variant="contained" 
                type="submit"
                onClick={handleSubmit}
                >
            Search
            </Button>

            {Error && <h1 style={{color:"red"}}>No such place in our API</h1>}



        </div>
    )
}