import { Grid, Typography, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

import Malditel from '../images/pexels-asad-photo-maldives-1287460.jpg';
import RooftopPool from '../images/pexels-pixabay-221457.jpg';
import Staycation from '../images/pexels-pixabay-271624.jpg';

export default function Rooms(){

    return(
        <Container>
            <Grid container spacing={2} justifyContent={'center'} sx={{
                // bgcolor: 'lightgrey',
                py: 3,
                my: 4
            }}>

                <Grid container justifyContent={'center'} xs={12} sx={{
                    mb: 4
                }}>
                    <Typography variant="h2" >
                        Our Finest Offers
                    </Typography>
                </Grid>
                
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={RooftopPool}
                            title="pool on rooftop"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Rooftop
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Our hotel located in Maldives has the finest scnerey perfect for a summer getaway.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small">Select</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={Malditel}
                            title="hotel in maldives"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Malditel
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Our hotel located in Maldives has the finest scnerey perfect for a summer getaway.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small">Select</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={Staycation}
                            title="staycation near the city"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Staycation
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Our hotel located in Maldives has the finest scnerey perfect for a summer getaway.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small">Select</Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </Container>
    );
}