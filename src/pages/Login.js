import React from 'react';
import { Container, Box, Typography, TextField, Button, Paper, Grid } from '@mui/material';


export default function Login(){

    return(
        <Container>
            <Grid container>
                <Grid item
                lg={6}
                >
                    <Box
                    sx={{
                        my: 2,
                        p: 1,
                        bgcolor: 'lightgray',
                    }}
                    >
                        <Paper elevation={2}
                        sx={{
                        p: 2,  
                        }}>
                            <Typography variant='h4'
                                sx={{
                                    my: 1,
                                }}>
                                Login
                            </Typography>
                            <Typography variant='h6'
                                sx={{
                                    my: 1,
                                }}>
                                User ID
                            </Typography>
                            <TextField 
                                id="outlined-basic"
                                variant="outlined"
                            />
                            <Typography variant='h6'
                                sx={{
                                    my: 1,
                                }}>
                                Password
                            </Typography>
                            <TextField 
                                id="outlined-basic"
                                variant="outlined"
                            />
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}