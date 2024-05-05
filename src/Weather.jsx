import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function Weather () {
    // let ur="https://imgs.search.brave.com/-afbGQLMisWUGlpyKoT3x2BTJAcmszX6zllYH_wypdE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bGVuc2JhbGwteWVs/bG93LWFuZC1vcmFu/Z2UtbGlnaHRzLmpw/Zz93aWR0aD0xMDAw/JmZvcm1hdD1wanBn/JmV4aWY9MCZpcHRj/PTA";

    const [weatherInfo, setWeatherInfo] = useState({
        city:'',
        temp: 0,
        tempMin: 0,
        tempMax: 0,
        humidity: 0,
        feelslike: 0,
        weather: "k"
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);

    }

    return(
    <div  style={{backgroundColor:"lightgreen",
     textAlign:"center"  ,display:"flex", justifyContent:"center", flexDirection: "column", alignItems:"center"}}>
        <SearchBox updateInfo={updateInfo}/>
        <br/>
        <br/>
        <InfoBox info={weatherInfo}/>
    </div>
    );
}