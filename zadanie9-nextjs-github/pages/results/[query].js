import Head from 'next/head'
import Main from '@/components/layouts/main'
import fetch from 'node-fetch'
import Image from 'next/image'
import Link from 'next/link'

export default function ResultsPage({ query, results }) {
  console.log(results)
  return (
    <Main>
      <Head>
        <title>Result for: { query }</title>
      </Head>
      <h1>Result for: { query }</h1>

      <ul className=''>

        {results.map((result) => (
          <li key={result.id} className='p-6 w-full bg-white rounded border-2 border-gray-200 my-5 flex items-center relative'>
            <Image width="30px" height="30px" src={result.owner.avatar_url} alt="" className='rounded-full w-1/6'/>
            <div className="text ml-5">
              <div className="name font-bold">{result.owner.login}</div>
              <div className="desc">{result.description}</div>
              <Link href={`/repository/${result.owner.login}-${result.name}`} className='relative viewDetails p-1 mt-2 cursor-pointer bg-sky-600 hover:bg-sky-700'>
              <span className='cursor-pointer'>view details</span>

              </Link>
            </div>
            <div className="stars absolute top-2 right-2">&#128948; {result.stargazers_count}</div>
            
          </li>
        ))}
        
      </ul>
    </Main>
  )
}

export async function getServerSideProps(context) {

  //  miejsce na zapytania asynchroniczne
  return fetch(`https://api.github.com/search/repositories?q=${context.params.query}`)
  .then((res) => res.json())
  .then((results) => {
    return {
      props: {
        title: context.params.query,
        results: results.items
      }
    }
  })
  .catch(error => {
    return {
      props: {
        error: `Cannot find results with this query: ${error}`
      }
    }
  })
}