import { Avatar, Card, Divider } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IUser from '../../data/IUser';

function UsersCard({users}:{users:IUser[]}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
        />
        <Avatar src={'https://i.pravatar.cc/300'} />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Lorem Ipsum
            </Typography>
            <Divider variant="middle" />
            <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Typography>
        </CardContent>
    </Card>
  );
}

export default UsersCard;
