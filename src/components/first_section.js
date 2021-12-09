/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Container from '@material-ui/core/Container';
import { Button, Box, Grid, Typography,  } from '@mui/material'
// import { sizing } from '@mui/system';
import Navbar from './navbar';
import Image from 'next/image';

const First_Section = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <Grid xs={12} md={11} sx={{ mx: 'auto' }}>
                    <Navbar />
                    <Box sx={{ flexDirection: {xs: 'column', md:'row'}, display: 'flex', pt: {xs:0, md:10} }}>
                        <Box sx={{ width: {xs:'100%', md:'75%'} }}>
                            <Typography variant="h3" component="div" gutterBottom>
                                <Box sx={{ fontWeight: 600, display: 'flex' }}>
                                Want anything to be easy with LaslesVPN.</Box>
                            </Typography>
                            <Typography variant="subtitle1" component="div" gutterBottom sx={{ py:2 }}>
                                Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
                            </Typography>
                            <Box sx={{ mx: {xs:'auto'}, textAlign: {xs:'center', md:'left'}, my: {xs:2, md:4} }}>
                                <Button size="large" variant="contained" color="error">Get Started</Button>
                            </Box>
                        </Box>
                        <Box sx={{ width: {xs:'100%', md:'75%'} }}>
                            <Image src="https://ik.imagekit.io/icvij1rszoy/vpn/Illustration_1_ZTJ74h1Xz.png?updatedAt=1639042265658" alt="img" width={611} height={382} />
                        </Box>
                    </Box>

                                
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', py: 15 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Box sx={{ pr: {xs:0, sm:4} }}><img src="https://ik.imagekit.io/icvij1rszoy/vpn/user_9vOYgzV2wDU.svg?updatedAt=1639051217797" alt="test" /></Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Box sx={{ fontWeight: 700 }}>90+</Box>
                                <Box>Users</Box>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Box sx={{ pr: {xs:0, sm:4} }}><img src="https://ik.imagekit.io/icvij1rszoy/vpn/location_nBamUlTZa.svg?updatedAt=1639051217737" alt="test" /></Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Box sx={{ fontWeight: 700 }}>30+</Box>
                                <Box>Locations</Box>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Box sx={{ pr: {xs:0, sm:4} }}><img src="https://ik.imagekit.io/icvij1rszoy/vpn/Server_XXWrOlDfH.svg?updatedAt=1639051217766" alt="test" /></Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Box sx={{ fontWeight: 700 }}>50+</Box>
                                <Box>Servers</Box>
                            </Box>
                        </Box>
                    </Box>

                </Grid>
            </Container>
        </div>
    )
}

export default First_Section
