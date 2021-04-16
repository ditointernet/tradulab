import mergeDeepRight from 'ramda/es/mergeDeepRight';
import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

import { CYAN, GREEN, RED, YELLOW, GREY, NEUTRAL } from '../constants/colors';

const theme = (extraOptions: ThemeOptions = {}) =>
  createMuiTheme(
    mergeDeepRight(
      {
        typography: {
          fontFamily: 'Open Sans',
        },
        palette: {
          primary: {
            light: CYAN.LIGHT,
            main: CYAN.MEDIUM,
            dark: CYAN.DARK,
            contrastText: NEUTRAL.WHITE,
          },
          secondary: {
            light: GREEN.LIGHT,
            main: GREEN.MEDIUM,
            dark: GREEN.DARK,
            contrastText: NEUTRAL.WHITE,
          },
          error: {
            light: RED.LIGHT,
            main: RED.MEDIUM,
            dark: RED.DARK,
            contrastText: NEUTRAL.WHITE,
          },
          warning: {
            light: YELLOW.LIGHT,
            main: YELLOW.MEDIUM,
            dark: YELLOW.DARK,
            contrastText: NEUTRAL.WHITE,
          },
          info: {
            light: GREY.LIGHT,
            main: GREY.MEDIUM,
            dark: GREY.DARK,
            contrastText: NEUTRAL.BLACK,
          },
          success: {
            light: GREEN.LIGHT,
            main: GREEN.MEDIUM,
            dark: GREEN.DARK,
            contrastText: NEUTRAL.WHITE,
          },
          common: {
            white: NEUTRAL.WHITE,
            black: NEUTRAL.BLACK,
          },
        },
      },
      extraOptions
    )
  );

export default theme;
