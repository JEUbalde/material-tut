import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export default function Home(){

    return(
        <Container>
            <Grid container justifyContent={'center'} sx={{
                // bgcolor: 'lightgrey',
                py: 3,
                my: 4
                }}>

                <Typography variant="h1" fontWeight={'medium'} sx={{
                    color: "#3B3B3B"
                }}>
                    Welcome to HBS!
                </Typography>

                <Typography variant="h4" sx={{
                    mt: 2
                }}>
                    Discover the finest hotels here in the Philippines!
                </Typography>

            </Grid>
        </Container>
    );
}