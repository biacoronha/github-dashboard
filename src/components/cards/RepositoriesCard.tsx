import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IRepository from '../../helpers/IRepository';

function RepositoriesCard({repository}:{repository:IRepository}) {
  return (
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
  );
}

export default RepositoriesCard;
