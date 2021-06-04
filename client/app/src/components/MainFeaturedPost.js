import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Link} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: 'rgba(0,0,0,.3)',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

export default function MainFeaturedPost(props) {
    const classes = useStyles();
    const {post} = props;
    const minWidth = 930;
    const narrow = minWidth > window.innerWidth;
    const backgroundImg =  {background: `rgba(172, 173, 174, .3) right/contain no-repeat url(${post.image})`};

    return (
        <Paper className={classes.mainFeaturedPost} style={narrow ? {} : backgroundImg}>
            {narrow ? <img src={post.image} width="100%" alt="img"/> : null}
            <div className={classes.overlay}/>
            <Grid container>
                <Grid item md={6}>
                    <div className={classes.mainFeaturedPostContent}>
                        <Typography variant="h5" color="inherit" align="justify">
                            {post.description}
                        </Typography>
                        <Typography>
                            {`Подробнее о моей истории можно прочитать по `}
                            <Link
                                href='https://docs.google.com/document/d/1JC8f5Bsu0GcZEc-NKF9t9_k2ZBHxcH6geqQNGYmbIy8/edit?usp=sharing'
                                target="_blank" rel="noreferrer">
                                ссылке
                            </Link>
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}

MainFeaturedPost.propTypes = {
    post: PropTypes.object,
};
