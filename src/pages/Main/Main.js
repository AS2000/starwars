import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardMedia,
    CardActionArea,
    CardHeader
} from '@material-ui/core/'

import AppContext from '../../context/AppContext';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    },
    action: {
        textAlign: 'center',
    },
    media: {
        height: 120,
        paddingTop: '56.25%', // 16:9
        alignContent: 'center',
      },
}));

const Main = () => {
    const { starwarsCharacters = [] } = React.useContext(AppContext);
    const classes = useStyles();

    const renederCard = (el) => {
        if (!el.image) return null;

        return (
            <Grid item xs={12} sm={6} md={3} key={ el.id }>
                <Card>
                    <CardActionArea
                        className= { classes.action }
                        onClick={ () => null }
                    >
                        <CardHeader
                            title={ el.name }
                        />
                        <CardMedia
                            className={classes.media}
                            image={ el.image }
                            title={ el.name }
                        />
                    </CardActionArea>
                </Card>
            </Grid>
        )
    };

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                { starwarsCharacters.map((el) => renederCard(el)) }
            </Grid>
        </div>
    );
};

export default Main;
