import "./InputFields.css";
import { Box, Select, TextField } from "@mui/material";
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#bdbdbd', // Gray border color
    },
    '&:hover fieldset': {
      borderColor: '#fff', // Border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff', // Border color when focused
    },
  },
  '& .MuiInputLabel-root': {
    color: '#bdbdbd', // Label color
    '&.Mui-focused': {
      color: '#fff', // Label color when focused
    },
  },
  '& .MuiInputBase-input': {
    color: '#bdbdbd', // Text color
    '&:focus': {
      color: '#fff', // Text color when focused
    },
  },
}));

const CustomSelect = styled(Select)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#bdbdbd', // Gray border color
    },
    '&:hover fieldset': {
      borderColor: '#fff', // Border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff', // Border color when focused
    },
  },
  '& .MuiInputLabel-root': {
    color: '#bdbdbd', // Label color
    '&.Mui-focused': {
      color: '#fff', // Label color when focused
    },
  },
  '& .MuiSelect-icon': {
    color: '#fff', // Arrow color
  },
  '& .MuiSelect-select.MuiSelect-select': {
    color: '#bdbdbd', // Text color
    '&:focus': {
      color: '#fff', // Text color when focused
    },
  },
}));

const InputFields = () => {
  return (
    <Box className="InputFields">
      <CustomTextField
        className="InputCountry"
        id="input-country"
        label="Search for a country"
        fontWeight="300"
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            borderColor: '#bdbdbd', // Gray border color
          },
        }}
      />
      <CustomSelect
        className="SelectRegion"
        id="select-region"
        fontWeight="300"
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            borderColor: '#bdbdbd', // Gray border color
          },
        }}
      />
    </Box>
  );
};

export default InputFields;