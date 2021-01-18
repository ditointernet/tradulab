import { createMuiTheme } from '@material-ui/core/styles';

import {
  BLUE_700,
  PINK_500,
  GREEN_400,
  PURPLE_400,
  BLUE_900,
} from '../utils/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: GREEN_400,
    },
    secondary: {
      main: BLUE_700,
    },
    error: {
      main: PURPLE_400,
    },
    warning: {
      main: PINK_500,
    },
    info: {
      main: BLUE_900,
    },
    success: {
      main: GREEN_400,
    },
  },
});

export default theme;
