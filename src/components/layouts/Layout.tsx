import { Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

type LayoutProps = {
  children: React.ReactNode;
};
export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex w="full" h="full" align="center" flexDir="column">
      <Flex flex={1} w="full" mb={{ base: '50px', md: '30px' }}>
        {children}
      </Flex>
    </Flex>
  );
};

export default MainLayout;
