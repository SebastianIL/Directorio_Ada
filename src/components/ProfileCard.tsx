import React from 'react';
import { Box, Typography, Card, Avatar, Chip } from '@mui/material';
import { Email as EmailIcon } from '@mui/icons-material';

interface ProfileCardProps {
  profilePicture: string;
  name: string;
  major: string;
  email: string;
  grade: string;
  subjects: string[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  profilePicture,
  name,
  major,
  email,
  grade,
  subjects,
}) => {
  return (
    <Card
      sx={{
        width: 280,
        padding: 3,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 4,
        gap: 1.5,
      }}
    >
      {/* Top Section: Avatar, Name, Major/Grade, and Email */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* Profile Picture */}
        <Avatar
          alt={name}
          src={profilePicture}
          sx={{
            width: 65,
            height: 65,
            border: '3px solid #008DDA',
          }}
        />

        {/* Name, Major/Grade, and Email */}
        <Box sx={{ flex: 1 }}>
          {/* Name and Major */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', textAlign: 'left', fontSize: '1.1rem' }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: 'left', fontSize: '0.95rem', color: '#555' }}
          >
            {major} | {grade}
          </Typography>

          {/* Email */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center', // Align email icon vertically with profile picture
              gap: 1,
              marginTop: 0.5, // Space below major/grade
            }}
          >
            <EmailIcon sx={{ color: '#008DDA', fontSize: 20 }} />
            <Typography
              variant="body2"
              sx={{
                fontSize: '0.95rem',
                color: '#555',
                overflowWrap: 'break-word',
              }}
            >
              {email}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Skills Section with Specialization Pills */}
      <Box
        sx={{
          marginTop: 1, // Reduced margin between profile and skills
          display: 'flex',
          flexDirection: 'row', // Arrange label and pills side by side
          alignItems: 'center', // Align the label and pills vertically with the profile picture and name
          gap: 1, // Small gap between the label and pills
        }}
      >
        {/* Skills Label */}
        <Typography
          variant="body2"
          sx={{
            fontWeight: 'bold',
            fontSize: '0.9rem',
            color: 'black', // Blue color for emphasis
            marginBottom: 4,
            textAlign: 'left', // Keep the label left-aligned
            flexShrink: 0, // Prevent the label from shrinking
            marginLeft: 2, // Space between the label and pills
          }}
        >
          Skills
        </Typography>

        {/* Skills Pills Container */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 0.5, // Reduced gap between chips
            justifyContent: 'flex-start', // Align pills to the left
            flexGrow: 1, // Allow the pills container to grow and take up remaining space
            paddingLeft: 1, // Added space between label and pills
            alignItems: 'center', // Vertically align the pills with the center of the name
            marginLeft: 2, // Space between the pills and the edge of the card
          }}
        >
          {subjects.map((subject, index) => (
            <Chip
              key={index}
              label={subject}
              sx={{
                fontSize: '0.8rem',
                backgroundColor: '#008DDA',
                color: '#FFFFFF',
                padding: '0 6px',
                height: 24,
                borderRadius: 3, // Slightly rounded corners for a soft look
              }}
            />
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export default ProfileCard;
