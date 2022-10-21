import { styled, TextField, TextFieldProps } from '@mui/material';

const PrimaryTextField = styled((props: TextFieldProps) => (
  <TextField
    sx={{
      flexGrow: 1,
      background: 'white',
    }}
    id="outlined-search-box"
    label="Search"
    variant="outlined"
    {...props}
  />
))(() => ({
  '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
    height: '1em',
  },
  '.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
    lineHeight: '1.1375em',
  },
  '&:hover .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
    borderColor: '#bdbdbd',
  },
  '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
    borderColor: '#a376763b',
  },
}));

export default PrimaryTextField;
