import { Avatar, Card, Divider } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IUser from '../../data/IUser';

function UsersCard({user}:{user:IUser}) {
  return (
    <Card sx={{ maxWidth: 345, display: 'inline-block', margin: 5}}>
        <CardMedia
            component="img"
            height="140"
            image={user.avatar_url}
            alt="green iguana"
        />
        <Avatar src={user.avatar_url} />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {user.name}
            email and followers more requests 1 for each and get lenght for the followers one (url and followers_url)
            </Typography>
            <Divider variant="middle" />
            <Typography variant="body2" color="text.secondary">
            more starred repos more one request and sort by stars (repos_url)
            </Typography>
        </CardContent>
    </Card>
  );
}

export default UsersCard;
