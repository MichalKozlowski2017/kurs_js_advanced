import { useState } from 'react';
import Head from 'next/head'
import Main from '@/components/layouts/main'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleButtonClick = (e) => {
    e.preventDefault();

    if(inputValue.length <= 3) return alert('puste pole wyszukiwania')

    router.push(`/results/${inputValue}`)
  }

  return (
    <Main>
      <Head>
        <title>Hello Index Page</title>
      </Head>
    <div className="m-4 border-2 border-gray-500 p-2">
      <input onChange={handleInputChange} value={inputValue} type="text" placeholder='search' className='w-full border-2 border-gray-300 rounded p-2' />
      <button type="button" className='bg-red-300 w-full my-2 p-2' onClick={handleButtonClick}>Send</button>
    </div>
    
    </Main>
  )
}
