
import photo1 from "./assets/carousel/1.jpg";
import photo2 from "./assets/carousel/2.jpg";
import photo3 from "./assets/carousel/3.jpg";
import photo4 from "./assets/carousel/4.jpg";
import photo5 from "./assets/carousel/5.jpg";
import photo6 from "./assets/carousel/6.jpg";
import photo7 from "./assets/carousel/7.jpg";
import CarouselLib from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export function Carousel(props: any)
{
    var items = [
        { img: photo1, },
        { img: photo2, },
        { img: photo3, },
        { img: photo4, },
        { img: photo5, },
        { img: photo6, },
        { img: photo7, },
    ]

    return (
        <CarouselLib fullHeightHover sx={{ width: '100%'}} >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </CarouselLib>
    )
}

function Item(props: any)
{
    return (
        <Paper>
            <img src={props.item.img} style={{ width: '100vw', height: 'auto' }}/>
        </Paper>
    )
}