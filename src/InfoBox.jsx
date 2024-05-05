
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function InfoBox ({info}) {

    // const IMG = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    

    const HOT_url = "https://images.unsplash.com/photo-1464660439080-b79116909ce7?q=80&w=3002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_url = "https://images.unsplash.com/photo-1599059021750-82716ae2b661?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_url = "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";




    return (
        <div className="InfoBox" style={{border:"5px solid pink" , borderRadius:"8px"}}>
            <div className="cardContent">
                <Card  sx={{ minWidth: 325 }}>
                    <CardMedia
                        sx={{ height: 190 }}
                        image={info.humidity>70 ? RAIN_url : info.temp>30 ? HOT_url : COLD_url }
                        title="green iguana"
                    />
                    <CardContent className='card' style={{backgroundColor:"lightyellow"}}>
                        <Typography  gutterBottom variant="h5" component="div">
                        <h3>City : {info.city}</h3>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                        <h3>Temperature : {info.temp} &deg; C</h3>
                        <h3>TempMin : {info.tempMin} &deg; C</h3>
                        <h3>tempMax : {info.tempMax} &deg; C</h3>
                        <h3>Feels Like : {info.feelslike} &deg; C</h3>
                        <h3><i>Humidity : {info.humidity}</i></h3>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );

}