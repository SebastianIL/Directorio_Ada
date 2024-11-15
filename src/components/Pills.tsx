
import React from 'react';
import { Chip } from '@mui/material';

interface PillsProps {
  subjects: string[];  // Array of subjects
}

/**
 * Pills component renders a list of subjects as Material-UI Chips.
 *
 * @param {PillsProps} props - The props for the Pills component.
 * @param {string[]} props.subjects - An array of subjects to be displayed as chips.
 *
 * @returns {JSX.Element} A div containing the list of chips.
 */
const Pills: React.FC<PillsProps> = ({ subjects }) => {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {subjects.map((subject, index) => (
        <Chip key={index} label={subject} color="primary" sx={{ fontSize: '0.9rem' }} />
      ))}
    </div>
  );
};

export default Pills;
