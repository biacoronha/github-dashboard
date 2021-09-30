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
        <Card sx={{ width: 400, height: 400}}>
          <CardMedia sx={{filter: "blur(2px)"}}
              component="img"
              height="100"
              image={user.avatar_url}
              alt="user avatar"
          />
          <div className="card-content">
          <Avatar src={user.avatar_url} sx={{padding: 0}} />
          <CardContent>
          <div className="card-content">
              <Typography gutterBottom variant="h5" component="div" display="block" sx={{padding: 0}}>
                {user.login}
              </Typography>
              <Typography gutterBottom variant="h6" component="div" display="block" sx={{padding: 0}}>
                {profile.email ?? 'No email available'}
              </Typography>
              <Typography gutterBottom variant="h6" component="div" display="block" sx={{padding: 0}}>
                {followers.length} followers
              </Typography>
              <Divider variant="middle" />
              {/* criar component pra colocar o repo */}
              <Typography variant="body2" color="text.secondary">
                {repos.length > 0 ? repos[0].name : 'No repos'}
              </Typography>
            </div>
          </CardContent>
          </div>
      </Card>
    : null}
  </div>
  );
}

export default UsersCard;
