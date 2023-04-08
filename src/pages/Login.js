import React from 'react';
import { Container, Box, Typography, TextField, Button, Paper, Grid } from '@mui/material';


export default function Login(){

    return(
        <Container>
            <Grid container
            sx={{
                justifyContent: 'center'
            }}>
                <Grid item
                lg={6}
                >   
                    <Box
                    sx={{
                        my: 2,
                        p: 1,
                        // bgcolor: 'lightgray',
                    }}
                    >
                        <Paper elevation={2}
                        sx={{
                        p: 2,
                        my: 2  
                        }}>
                            <Typography variant='h4'
                                sx={{
                                    my: 2,
                                    fontWeight:'medium'
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
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                                label = "User ID"
                            />
                            <Typography variant='h6'
                                sx={{
                                    my: 1,
                                }}>
                                Password
                            </Typography>
                            <TextField 
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                                label = "Password"
                            />
                            <Button variant='contained' sx={{my:2}}>Login</Button>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}