import React from 'react';
import { Box, useTheme } from '@chakra-ui/react';

import { Button } from 'components/button';

export default function Main(): JSX.Element {
  const theme = useTheme();
  return (
    <Box bg="main.100" color="white" textAlign="center" py={10}>
      <h1 style={{ fontSize: theme.fontSizes['5xl'] }}>superplate</h1>
      <p style={{ fontSize: theme.fontSizes.lg }}>
        The frontend boilerplate with superpowers!
      </p>
      <Button colorScheme="blue" variant="solid" size="md">
        <a
          href="https://pankod.github.io/superplate/"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </a>
      </Button>
    </Box>
  );
}
