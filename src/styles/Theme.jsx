import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    header: '#7F260F',
    dialogBG: 'rgba(255, 255, 255, 0.66)',
    fontHeader: 'white',
    fontDialog: 'black',
  },
  fonts: {
    primary: {
      family: 'Cabin, sans-serif',
    },
    primaryCondensed: {
      family: 'Cabin Condensed, sans-serif',
    },
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
