import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import UrlCard from '../components/urlCard/UrlCard';

const AddUrl = () => {
  return (
    <Container maxWidth="sm">
      <Box mt={10}>
        <UrlCard />
      </Box>
    </Container>
  );
}

export default AddUrl;