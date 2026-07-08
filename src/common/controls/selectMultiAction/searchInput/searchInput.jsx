import { React } from 'react';
import PropTypes from 'prop-types';
import {
  InputAdornment, ListSubheader, TextField,
} from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { InputContainerStyle, TextFieldStyle } from './searchInput.style';

const SearchInput = ({ placeholder, onChange, text }) => (
  <ListSubheader sx={InputContainerStyle}>
    <TextField
      size="small"
      autoFocus
      placeholder={placeholder}
      fullWidth
      autoComplete="off"
      sx={TextFieldStyle(Boolean(text))}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ height: 'auto', margin: 0 }}>
            <SearchRoundedIcon sx={{ fontSize: '16px' }} color="icon" />
          </InputAdornment>
        ),
      }}
      defaultValue=""
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => { if (e.key !== 'Escape') e.stopPropagation(); }}
    />
  </ListSubheader>
);

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  text: PropTypes.string,
};

SearchInput.defaultProps = {
  placeholder: '',
  onChange: () => {},
  text: '',
};

export default SearchInput;
