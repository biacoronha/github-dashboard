import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IRepository from '../../helpers/IRepository';
import './Cards.css';

export default function RepositoriesCard({repository}:{repository:IRepository}) {
  return (
    <div className="repos-cards">
      <Card sx={{ width: 330, height: 300 }}>
          <CardContent>
            <div className="card-content">
              <Typography gutterBottom variant="h5" component="div">
                {repository.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Stars: {repository.stargazers_count}
              </Typography>
              <div className="card-description">
                <Typography variant="body2" color="text.secondary">
                  {repository.description}
                </Typography>
              </div>
            </div>
          </CardContent>
      </Card>
    </div>
  );
}