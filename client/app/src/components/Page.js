import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Markdown from "./Markdown";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
}));

export default function Page(props) {
    const classes = useStyles();
    const {post} = props;
    return (
        <Grid item xs={12} md={12}>
            <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                {post}
            </Markdown>
        </Grid>
    );
}

Page.propTypes = {
    posts: PropTypes.array,
    title: PropTypes.string,
};