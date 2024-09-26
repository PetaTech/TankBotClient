import { Helmet } from 'react-helmet-async';
// @mui
import { Divider } from '@mui/material';
// sections
import Service from '../sections/service/Service';

// ----------------------------------------------------------------------

export default function ServicePage() {
  return (
    <>
      <Helmet>
        <title> Service | PerfectForexTrade</title>
      </Helmet>
      <Service />
    </>
  );
}
