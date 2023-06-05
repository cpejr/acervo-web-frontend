import { ConfigProvider } from 'antd';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: 'red',
    background: 'black',
    bordeaux: '#7F260F',
  },
  fonts: {
    color: {
      primary: 'white',
      bordeaux: '#7F260F',
    },
    family: {
      primary: 'Arial, Helvetica, sans-serif',
    },
    size: {
      small: '1.4rem',
    },
  },
};
// More options in https://ant.design/docs/react/customize-theme
const antdTheme = {
  token: {
    colorPrimary: theme.colors.primary,
  },
  components: {},
};

export default function Theme({ children }) {
  return (
    <ConfigProvider theme={antdTheme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ConfigProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
