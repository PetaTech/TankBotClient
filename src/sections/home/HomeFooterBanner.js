import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';
import Iconify from 'components/iconify';
import { PATH_AUTH } from 'routes/paths';
// ----------------------------------------------------------------------
const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(10, 0),
  // [theme.breakpoints.up('md')]: {
  //   padding: theme.spacing(15, 0),
  // },
}));

// ----------------------------------------------------------------------

export default function HomeFooterBanner() {
  return (
    <StyledRoot>
      <Stack component={MotionViewport}>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          spacing={5}
          sx={{
            // bgcolor: '#0B0E11',
            py: 10,
            borderRadius: 1,
          }}
        >
          <Typography variant="h2">Start Earning Today</Typography>
          <Button
            color="inherit"
            size="large"
            variant="contained"
            target="_blank"
            href="https://t.me/+c6jqS8-mOGRiZDE1"
            startIcon={<Iconify icon="eva:flash-fill" width={24} />}
            sx={{
              // bgcolor: 'grey.800',
              color: 'success.main',
              // color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
              '&:hover': {
                bgcolor: 'text.primary',
              },
            }}
          >
            Join Now
          </Button>
        </Stack>
      </Stack>
    </StyledRoot>
  );
}
