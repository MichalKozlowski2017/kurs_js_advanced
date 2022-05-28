import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-gray-600 p-3 text-white text-center'>
      <Link href='/'>Github App</Link>
      
      {/* <nav>
        <ul className='flex'>
          <li>
            <Link href='/'>Index</Link>
          </li>
          <li>
            <Link href='/results'>Results</Link>
          </li>
        </ul>
      </nav> */}
      
    </header>
  )
}

export default Header