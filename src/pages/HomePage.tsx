import React from 'react';
import { Box, Typography } from '@mui/material';
import SimpleCard from '../components/SimpleCard';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { FORMS_SOURCE } from '../constants/links';

const HomePage: React.FC = () => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate hook

  const handleDirectorioClick = () => {
    navigate('/directory'); // Navigate to the /directory path
  };

  const handleAgendarClick = () => {
    window.location.href = FORMS_SOURCE; // Replace with your actual form URL
  };

  return (
    // Outer Box with the full viewport height using flex
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Use minHeight to ensure it fits the screen
        margin: 0, // No margin to avoid overflow
        padding: { xs: 2, md: 5 }, // Adjust padding for better fit
        backgroundColor: '#DBDBDB',
        overflow: 'hidden', // Prevent scrolling
      }}
    >
      <Box
        sx={{
          flex: 1, // Make this box flexible and it will take up the remaining space
          backgroundColor: '#F7EEDD',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on large screens
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: 3, md: 5 }, // padding to ensure good spacing
        }}
      >
        {/* Left side (Text) */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            padding: { xs: 2, md: 3 }, // Adjust padding for better alignment
          }}
        >
          <Typography
            variant="h1"
            color="black"
            textAlign="left"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '3rem', sm: '4rem', md: '6rem' }, // Adjust responsive font size
              lineHeight: 1.2, // To avoid overly tall text
            }}
          >
            ¿Ingenierx<br />
            del<br />
            futuro?
          </Typography>
        </Box>

        {/* Right side (SimpleCards) */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2, // Reduced gap between cards for better fit
            padding: { xs: 2, md: 4 }, // Reduced padding for better fit
          }}
        >
          <SimpleCard
            color="#008DDA"
            text="Agenda una asesoría."
            buttonText="Agendar"
            onButtonClick={handleAgendarClick}
          />
          <SimpleCard
            color="#41C9E2"
            text="Conoce nuestros mentores"
            buttonText="Directorio"
            onButtonClick={handleDirectorioClick}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
