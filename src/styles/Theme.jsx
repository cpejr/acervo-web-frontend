import { ConfigProvider } from 'antd';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: 'red',
    background: 'black',
  },
  fonts: {
    color: {
      primary: 'white',
    },
    family: {
      primary: 'Arial, Helvetica, sans-serif',
      cabin: 'Cabin, sans-serif',
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
