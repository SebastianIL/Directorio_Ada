import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import ProfileCard from '../components/ProfileCard'; // Import updated ProfileCard component
import { FORMS_SOURCE } from '../constants/links';
import { fetchUsers } from '../services/usersService';

const Directory: React.FC = () => {

  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(
          data.map((row: any) => ({
            fotoperfil: row.fotoperfil,
            nombre: row.nombre,
            carrera: row.carrera,
            email: row.email,
            semestre: row.semestre,
            experiencia: row.experiencia.split(','), // Convert comma-separated string to array
            disponibilidad: JSON.parse(row.disponibilidad), // Parse JSON string
          }))
        );
      } catch (error) {
        console.error('Error loading users:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh', // Full screen loader
          backgroundColor: '#f5f5f5', // Slightly gray background for contrast
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress size={80} thickness={4} sx={{ color: '#008DDA' }} />
          <Typography
            variant="h6"
            sx={{
              marginTop: 2,
              fontWeight: '500',
              color: '#555',
            }}
          >
            Cargando...
          </Typography>
        </Box>
      </Box>
    );
  }

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
            fotoperfil={user.fotoperfil}
            nombre={user.nombre}
            carrera={user.carrera}
            email={user.email}
            semestre={user.semestre}
            experiencia={user.experiencia}
            disponibilidad={user.disponibilidad}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Directory;
