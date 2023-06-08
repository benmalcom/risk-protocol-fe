import { VStack } from '@chakra-ui/react';
import { HeaderTags } from 'components/common';
import { Hero } from 'components/home';

const Home = () => {
  return (
    <>
      <HeaderTags
        title={`${process.env.NEXT_PUBLIC_APP_NAME} - Create your personalized gift registry in minutes.`}
        description="Discover how our gift registry makes celebrations effortless, curate
        your wishlist for your special occasions and get the perfect gifts every
        time."
        keywords="Gift, Wishlist, registry, gift registry, celebrations, create wishlist, create gift registry"
      />

      <VStack w="full" spacing={0}>
        <Hero />
      </VStack>
    </>
  );
};

export default Home;
