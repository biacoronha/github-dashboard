import { Avatar, Card, Divider } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IUser from '../../helpers/IUser';
import UseFetch from '../../helpers/UseFetch';

function UsersCard({user}:{user:IUser}) {

  // const [profile, setProfile] = useState();
  // const [followers, setFollowers] = useState();
  // const [repos, setRepos] = useState();

  // setProfile(UseFetch(user.url));
  // setFollowers(UseFetch(user.followers_url));
  // setRepos(UseFetch(user.repos_url));

  const profile = UseFetch(user.url);
  const followers = UseFetch(user.followers_url);
  const repos = UseFetch(user.repos_url);

  console.log("aqui")
  console.log(user.login)
  console.log(profile)
  console.log(followers)
  console.log(repos)


  return (
    <div>
      {(user && profile && followers && repos) ? 
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
              {user.login}
              Email: {profile.email}
              Followers: {followers.length}
              </Typography>
              <Divider variant="middle" />
              <Typography variant="body2" color="text.secondary">
              more starred repos more one request and sort by stars (repos_url)
              </Typography>
          </CardContent>
      </Card>
    : null}
  </div>
  );
}

export default UsersCard;
