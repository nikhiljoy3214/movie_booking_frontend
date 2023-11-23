
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function MovieItem({title,releaseDate,posterUrl,id,langauge}) {
  const dispatch=useDispatch()

    const isAdminLoggedIn=useSelector((state)=>state.admin.isLoggedIn)
    const isUserAdminLoggedIn=useSelector((state)=>state.user.isLoggedIn)
    
  return (
    <Card sx={{ 
        margin:3,
        width: 240,height:320, 
        
        borderRadius:5,":hover":{
        boxShadow:"10px 10px 20px #ccc"
    } }}>
      <img height={"50%"} width="100%" src={posterUrl} alt= {title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(releaseDate).toDateString()}

        </Typography>
        <Typography variant="body2" color="text.secondary">
          
           
          
        </Typography>
      </CardContent>
      <CardActions>
        {
          isUserAdminLoggedIn && 
          <Button LinkComponent={Link} to={`/booking/${id}`} fullWidth variant='contained' sx={{margin:"auto"}} size="small">BOOK</Button>
          }
          {
          !isUserAdminLoggedIn && !isAdminLoggedIn &&
          <Button LinkComponent={Link} to={"/auth"} fullWidth variant='contained' sx={{margin:"auto"}} size="small">BOOK</Button>
          }


          

        
      </CardActions>
    </Card>
  )
}

export default MovieItem