import React, { useRef } from 'react';
import { SiOpensearch } from 'react-icons/si'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { InputRightElement, InputGroup, Input } from '@chakra-ui/react';


const Search = ({ setContent, setLoading }) => {
  const inputRef = useRef(null);

  async function summarizeURL() {

    const { data } = inputRef?.current?.value ? (await axios.get('https://article-extractor-and-summarizer.p.rapidapi.com/summarize', {
      params: {
        url: inputRef?.current?.value,
        length: '6'
      },
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
      }
    })) : toast('Empty url is not allowed as a query');

    console.log(data)
    setLoading(false);
    setContent(data?.summary);
  }


  return (
    <InputGroup w={window.innerWidth > 1200 ? '50vw' : '70vw'} mt={15} mb={35}>
      <Input placeholder='enter URL' textAlign={'center'} fontWeight={900} ref={inputRef} />
      <InputRightElement children={<SiOpensearch
        cursor={'pointer'}
        onClick={() => { summarizeURL(); setLoading(true) }}
      />} />

    </InputGroup>
  )
}

export default Search