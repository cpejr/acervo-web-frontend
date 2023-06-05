import { ConfigProvider } from 'antd';
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
