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

      
        
     
    </Main>
  )
}

export async function getServerSideProps(context) {
  const [login, name] = context.params.query.split('-')
  //  miejsce na zapytania asynchroniczne
  return fetch(`https://api.github.com/repos/${login}/${name}`)
  .then((res) => res.json())
  .then((results) => {
    return {
      props: {
        title: context.params.query,
        results
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