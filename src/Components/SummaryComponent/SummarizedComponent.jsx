import React from 'react';
import { Box, SkeletonCircle, SkeletonText, Text } from '@chakra-ui/react';


const SummarizedComponent = ({ content, loading }) => {

  return (
    <>
      {loading ? (<Box w={'60vw'} mt={50}
        h={'30vh'} padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={5} spacing='4' skeletonHeight='2' />
      </Box>) : <Text w={window.innerWidth > 1200 ? '50vw' : '90vw'} mt={10} fontWeight={900}>
        {content}
      </Text>}
    </>

  )
}

export default SummarizedComponent