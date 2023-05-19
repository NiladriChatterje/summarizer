import React from 'react';
import './SummaryComponent.css';
import { Box, Flex, SkeletonCircle, SkeletonText, Text } from '@chakra-ui/react';


const SummarizedComponent = ({ content, loading }) => {

  return (
    <>
      {loading ? (<Box w={'60vw'} mt={50}
        h={'30vh'} padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={5} spacing='4' skeletonHeight='2' />
      </Box>) : <Text w={'50vw'} mt={10} fontWeight={800}>
        {content}
      </Text>}
    </>

  )
}

export default SummarizedComponent