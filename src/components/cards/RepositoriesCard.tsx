import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IRepository from '../../helpers/IRepository';
import './Cards.css';

function RepositoriesCard({repository}:{repository:IRepository}) {
  return (
    <div className="repos-cards">
      <Card sx={{ maxWidth: 270, maxHeight: 100, display: 'inline-block', margin: 3 }}>
          <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {repository.name}
              Stars: {repository.stargazers_count}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {repository.description}
              </Typography>
          </CardContent>
      </Card>
    </div>
  );
}

export default RepositoriesCard;
