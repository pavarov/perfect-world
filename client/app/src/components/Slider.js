import {Carousel} from '3d-react-carousal';
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import i1 from '../img/withchildren.png'
import i2 from '../img/footballer.png'
import i3 from '../img/dog.png'
import i4 from '../img/kibatletics.png'
import i5 from '../img/onboat.png'
import i6 from '../img/boatsky.png'
import i7 from '../img/balleater.png'

const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: theme.spacing(5),
    },
}));

function Slider () {
    const classes = useStyles();
    let slides = [
        <img src={i1} alt="1" height="350"/>,
        <img src={i2} alt="2" height="350"/>,
        <img src={i3} alt="3" height="350"/>,
        <img src={i4} alt="4" height="350"/>,
        <img src={i5} alt="5" height="350"/>,
        <img src={i6} alt="6" height="350"/>,
        <img src={i7} alt="7" height="350"/>
        ]
    return (
        <Container className={classes.container}>
            <Carousel slides={slides}  autoplay={true} interval={4000}/>
        </Container>
    );
}

export default Slider;