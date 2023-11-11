import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

const categoryOptions = [
  {
    description: '8985 Merrill Ave, Chino, CA 91710',
    title: 'CAL1 (Pickup- West Gate, Delivery- East Gate)',
    value: 'CAL1 (Pickup- West Gate, Delivery- East Gate)',
  },
  {
    description: '15245 Van Vliet, Chino, CA 91710',
    title: 'CAL2 (Pickup- South Gate, Delivery- North Gate)',
    value: 'CAL2 (Pickup- South Gate, Delivery- North Gate)',
  },
  // {
  //   description: 'Unlimited term contracts',
  //   title: 'Employees',
  //   value: 'employees',
  // },
];

export const JobCategoryStep = (props) => {
  const { onBack, onNext, ...other } = props;
  const [category, setCategory] = useState(categoryOptions[1].value);

  const handleCategoryChange = useCallback((category) => {
    setCategory(category);
  }, []);

  return (
    <Stack
      spacing={3}
      {...other}
    >
      <Stack spacing={2}>
        {categoryOptions.map((option) => (
          <Card
            key={option.value}
            sx={{
              alignItems: 'center',
              cursor: 'pointer',
              display: 'flex',
              p: 2,
              ...(category === option.value && {
                backgroundColor: 'primary.alpha12',
                boxShadow: (theme) => `${theme.palette.primary.main} 0 0 0 1px`,
              }),
            }}
            onClick={() => handleCategoryChange(option.value)}
            variant="outlined"
          >
            <Stack
              direction="row"
              spacing={2}
            >
              <Radio
                checked={category === option.value}
                color="primary"
              />
              <div>
                <Typography variant="subtitle1">{option.title}</Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  {option.description}
                </Typography>
              </div>
            </Stack>
          </Card>
        ))}
      </Stack>
      <div>
        <ul>
          <li>Keep gates closed at all times.</li>
          <li>
            No Unauthorised trucks are allowed in the property not even for turning!{' '}
            <strong>They should backup and leave.</strong>
          </li>
        </ul>
        {/* <Typography variant="">Keep gates closed at all times.</Typography>
        <br />
        <Typography variant="">
          No Unauthorised trucks are allowed in the property not even for turning! They should
          backup and leave.
        </Typography> */}
      </div>
      <div>
        <Button
          endIcon={
            <SvgIcon>
              <ArrowRightIcon />
            </SvgIcon>
          }
          onClick={onNext}
          variant="contained"
        >
          Continue
        </Button>
      </div>
    </Stack>
  );
};

JobCategoryStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func,
};
