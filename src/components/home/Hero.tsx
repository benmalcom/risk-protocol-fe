import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import Select from 'react-select';
import { FlexColumn } from 'components/common/MotionContainers';

const Hero = () => (
  <FlexColumn
    h={{ sm: 'fit-content', '2xl': '40vh' }}
    w="full"
    align={{ sm: 'unset', xl: 'center' }}
    shadow="xs"
    justify="center"
    position="relative"
    boxShadow="sm"
    pos="relative"
    bg="purple.700"
    //bg="rgba(0,0,0,0.1)"
  >
    <Container
      as={FlexColumn}
      py={1.5}
      maxW="3xl"
      h="full"
      alignItems="center"
      justifyContent="center"
      color="white"
      gap={3}
    >
      <Heading as="h2" size="2xl" mb={5}>
        Pair Master Pro
      </Heading>
      <Text fontSize="lg" textAlign="center">
        Your robust companion for precise analysis, real-time market insights,
        and proficient trading of token pairs with advanced tools and strategies
      </Text>
      <Flex
        w="450px"
        boxShadow="md"
        bg="blackAlpha.500"
        borderRadius="md"
        mt={5}
        //position="absolute"
        // transform="translateY(50%)"
        // bottom={0}
        p={6}
        h="fit-content"
      >
        <Select
          instanceId="category"
          placeholder="Select token pair..."
          isClearable
          options={[]}
          styles={{
            container: baseStyles => ({
              ...baseStyles,
              height: '100%',
              width: '100%',
            }),
            control: (baseStyles, state) => ({
              ...baseStyles,
              height: '40px',
              width: '100%',
              borderRadius: '7px',
              borderWidth: '2px',
              boxShadow:
                state.isFocused || state.menuIsOpen ? 'none' : undefined,
            }),
            placeholder: baseStyles => ({
              ...baseStyles,
              fontSize: '16px',
            }),
          }}
        />
      </Flex>
    </Container>
  </FlexColumn>
);

export default Hero;
