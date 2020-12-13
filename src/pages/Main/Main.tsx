import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardMedia,
    CardActionArea,
    CardHeader,
} from '@material-ui/core/'
import Spinner from '../../components/Spinner/Spinner';

import AppContext from '../../context/AppContext';

import { Character } from '../../typings';

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

const Main: React.FC = () => {
    const {
        starwarsCharacters = [],
        loading,
    } = React.useContext(AppContext);
    const classes = useStyles();
    const history = useHistory();

    const isData = starwarsCharacters && starwarsCharacters.length;

    const renederCard = (el: Character) => {
        if (!el.image) return null;

        return (
            <Grid item xs={12} sm={6} md={3} key={ el.id }>
                <Card>
                    <CardActionArea
                        className= { classes.action }
                        onClick={ () => (
                            history.push(`/details/${el.id}`)
                        )}
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
            <Spinner
                isLoading={ loading || !isData }
            />
            {
                isData && (
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        { starwarsCharacters.map(renederCard) }
                    </Grid>
                )
            }
        </div>
    );
};

export default React.memo(Main);
