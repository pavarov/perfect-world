import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import ourPartners from "../posts/our-partners.md";
import doneProjects from '../posts/done-projects.md.js';
import instructions from '../posts/instructions.md.js';
import offers from '../posts/offers.md.js';
import greeting from '../posts/greeting.md.js';
import mainPersonPhoto from '../img/mainPersonPhoto.png';
import Markdown from "./Markdown";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const mainFeaturedPost = {
    title: '',
    description: (
        <Markdown key={greeting.substring(0, 40)}>
            {greeting}
        </Markdown>
    ),
    image: mainPersonPhoto,
    imgText: 'Представление',
    linkText: '',
};

const posts = [doneProjects, instructions, ourPartners, offers];

export default function MainPage() {
    const classes = useStyles();

    return (
        <main>
            <MainFeaturedPost post={mainFeaturedPost}/>
            <Grid container spacing={5} className={classes.mainGrid}>
                <Main posts={posts}/>
            </Grid>
        </main>
    );
}
