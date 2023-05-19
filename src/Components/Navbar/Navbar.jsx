import React from 'react';
import './Navbar.css';
import { FaSnowflake } from 'react-icons/fa';
import { Text } from '@chakra-ui/react';

const Navbar = () => {

  return (
    <nav>
      <FaSnowflake
        color='#d3f5f5'
        size={75}
      />
      <Text color={'white'} fontWeight={900} fontSize={'3xl'}>Summarium</Text>
    </nav>
  )
}

export default Navbar