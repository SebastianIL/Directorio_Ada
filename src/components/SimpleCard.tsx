import React from 'react';

interface SimpleCardProps {
  color: string;
  text: string;
  buttonText: string;
  onButtonClick: () => void;
}

/**
 * A simple card component that displays a text and a button.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.color - The background color of the card.
 * @param {string} props.text - The text content to display inside the card.
 * @param {string} props.buttonText - The text to display on the button.
 * @param {() => void} props.onButtonClick - The callback function to handle button click events.
 *
 * @returns {JSX.Element} The rendered SimpleCard component.
 */
const SimpleCard: React.FC<SimpleCardProps> = ({ color, text, buttonText, onButtonClick }) => {
  const cardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
    padding: '2rem', // Adjust padding to be more flexible
    borderRadius: '16px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '2rem', // Responsive font size can be adjusted here
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '90%', // Make width flexible
    maxWidth: '500px', // Set a max-width to avoid becoming too large
    height: 'auto', // Let height adjust based on content
    minHeight: '200px', // Ensure a minimum height to maintain the card's structure
  };

  const buttonStyle: React.CSSProperties = {
    marginTop: '10px',
    padding: '12px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#fff',
    color: color,
    fontSize: '1.5rem', // Adjustable font size
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '80%', // Flexible width
    maxWidth: '290px', // Set a max-width for the button
    height: '50px',
  };

  return (
    <div style={cardStyle}>
      <div>{text}</div>
      <button style={buttonStyle} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default SimpleCard;
