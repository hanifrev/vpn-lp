/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Button, Box, Grid, ListItem, ListItemButton, ListItemText, Typography, ToggleButton } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';

const Navbar = () => {
    const [selected, setSelected] = useState(false)

    return (
        <div>
            {/* < md (mobile) */}
            <Box sx={{ display: {xs: 'flex', md:'none'}, justifyContent: 'space-between', my: 4 }}>
                <Box>
                    <a href="#">
                        <img src="https://ik.imagekit.io/icvij1rszoy/vpn/Logo__1__eKcsj-X0R.svg?updatedAt=1639050272765" />
                    </a>
                </Box>
                <ToggleButton 
                    value="check"
                    selected={selected}
                    onChange={() => {
                        setSelected(!selected);
                }}>
                    <DehazeIcon />
                </ToggleButton>
            </Box>
            {/* > md (desktop) */}
            <Box sx={{ display: {xs: 'none', md:'flex'}, justifyContent: 'space-between', my: 4 }}>
                <Box>
                    <a href="#">
                        <img src="https://ik.imagekit.io/icvij1rszoy/vpn/Logo_TbML6q81Z.svg?updatedAt=1639050044009" />
                    </a>
                </Box>
                <Box sx={{ width: '15%', display: 'flex', justifyContent: 'space-around' }}>
                    <Button variant="text" size="small">
                        SignIn
                    </Button>
                    <Button variant="outlined" size="small">
                        SignUp
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default Navbar
