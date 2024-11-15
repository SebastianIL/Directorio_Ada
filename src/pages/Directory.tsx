import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ProfileCard from '../components/ProfileCard'; // Import updated ProfileCard component
import { FORMS_SOURCE } from '../constants/links';

const Directory: React.FC = () => {
  const users = [
    {
      profilePicture: '/images/profile1.jpg',
      name: 'Estudiante Apellido',
      major: 'ITC',
      email: 'a0000000@tec.mx',
      grade: '7mo',
      subjects: ['AI', 'Cloud', 'Backend'],
    },
    {
      profilePicture: '/images/profile2.jpg',
      name: 'Estudiante Apellido',
      major: 'IRS',
      email: 'a0000000@tec.mx',
      grade: '5to',
      subjects: ['Control', 'Vision', 'Robotica'],
    },
  ];

  const handleAgendarClick = () => {
    window.location.href = FORMS_SOURCE;
  };

  return (
    <Box
      sx={{
        backgroundColor: '#DBDBDB',
        minHeight: '100vh',
        padding: { xs: 3, md: 5 },
      }}
    >
      {/* Title Section with "Agendar" button horizontally aligned */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', 
          marginBottom: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black' }}>
          Directorio
        </Typography>
        <Button
          onClick={handleAgendarClick}
          variant="contained"
          sx={{
            backgroundColor: '#FD8B51',
            color: 'white',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: '#F76A32',
            },
          }}
        >
          Agendar
        </Button>
      </Box>

      {/* Profile Cards Section */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: 4, 
          justifyContent: 'center',
        }}
      >
        {users.map((user, index) => (
          <ProfileCard
            key={index}
            profilePicture={user.profilePicture}
            name={user.name}
            major={user.major}
            email={user.email}
            grade={user.grade}
            subjects={user.subjects}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Directory;
