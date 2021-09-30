import { Avatar, Card, Divider } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IUser from '../../helpers/IUser';
import UseFetch from '../../helpers/UseFetch';
import './Cards.css';

function UsersCard({user}:{user:IUser}) {

  const profile = UseFetch(user.url);
  const followers = UseFetch(user.followers_url);
  const repos = UseFetch(user.repos_url+"?q=sort:stars&page=1&per_page=1");

  console.log("aqui")
  console.log(repos)


  return (
    <div className="user-cards" >
       {(user && profile && followers && repos) ? 
        <Card sx={{ maxWidth: 345}}>
          <CardMedia
              component="img"
              height="140"
              image={user.avatar_url}
              alt="green iguana"
          />
          <Avatar src={user.avatar_url} />
          <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {user.login}
              Email: {profile.email ?? 'No email available'}
              Followers: {followers.length}
              </Typography>
              <Divider variant="middle" />
              <Typography variant="body2" color="text.secondary">
                {repos.length > 0 ? repos[0].name : 'No repos'}
              </Typography>
          </CardContent>
      </Card>
    : null}
  </div>
  );
}

export default UsersCard;
