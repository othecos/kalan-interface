import React from 'react';
import {  withStyles, makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import { red,green } from '@material-ui/core/colors';

// const BootstrapButton = withStyles({
//   root: {
//     boxShadow: 'none',
//     textTransform: 'none',
//     fontSize: 16,
//     padding: '6px 12px',
//     border: '1px solid',
//     lineHeight: 1.5,
//     backgroundColor: '#0063cc',
//     borderColor: '#0063cc',
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:hover': {
//       backgroundColor: '#0069d9',
//       borderColor: '#0062cc',
//       boxShadow: 'none',
//     },
//     '&:active': {
//       boxShadow: 'none',
//       backgroundColor: '#0062cc',
//       borderColor: '#005cbf',
//     },
//     '&:focus': {
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//     },
//   },
// })(Button);

const ColorErrorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);
const ColorSuccessButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

// const theme = createMuiTheme({
//   palette: {
//     primary: green,
//   },
// });

export default function CustomizedButtons({ color, children, ...props }) {
  const classes = useStyles();
  console.log({ color, children, ...props })
  return (
    <div>
      {color == 'error' ?
        <ColorErrorButton {...props} >
          {children}
        </ColorErrorButton>
        :
        color == 'success' ? 
        <ColorSuccessButton {...props} >
        {children}
      </ColorSuccessButton>
        :
        <Button color="secondary" {...props}>
          {children}
        </Button>

      }


    </div>
  );
}
