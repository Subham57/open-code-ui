import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../../Asset/Logo.png'


export default function Header() {
    return (
        <Box position="static" sx={{ backgroundColor: "#FEE715" }}>
            <Container maxWidth="xl" className='d-flex justify-content-between'>
                <Box className="d-flex">
                    <img style={{ width: 65 }} src={logo} alt='logo'></img>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        className='d-flex align-items-center'
                        sx={{
                            fontFamily: 'monospace',
                            letterSpacing: '.2rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        OPEN CODE
                    </Typography>
                </Box>

                <Box
                    className='d-md-flex '
                    sx={{
                        display: { xs: 'none' }
                    }}
                >
                    <Button sx={{ my: 2, color: 'black', fontFamily: 'monospace', display: 'block' }} >
                        Product
                    </Button>
                    <Button sx={{ my: 2, color: 'black', fontFamily: 'monospace', display: 'block' }} >
                        Premium
                    </Button>
                    <Button sx={{ my: 2, color: 'black', fontFamily: 'monospace', display: 'block' }} >
                        Explore
                    </Button>
                    <Button sx={{ my: 2, color: 'black', fontFamily: 'monospace', display: 'block' }} >
                        Developer
                    </Button>
                    <Button sx={{ my: 2, color: 'black', fontFamily: 'monospace', display: 'block' }} >
                        Signin
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}
