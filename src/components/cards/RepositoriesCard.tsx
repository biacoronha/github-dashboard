import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IRepository from '../../data/IRepository';

function RepositoriesCard({repositories}:{repositories:IRepository[]}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Lorem Ipsum
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Typography>
        </CardContent>
    </Card>
  );
}

export default RepositoriesCard;
