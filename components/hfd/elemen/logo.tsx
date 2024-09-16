import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className='flex items-center h-9 overflow-hidden'>
        <Link href="/" className='dark:scale-0 dark:w-0'>
            <Image src="/ArsiVerse.svg"
                    width={120} height={40} alt='ArsiVerse'/>
        </Link>
        <Link href="/" className='w-0 scale-0 dark:w-fit dark:scale-100'>
            <Image src="/ArsiVerse-negative.svg"
                    width={120} height={40} alt='ArsiVerse' />
        </Link>
    </div>
  )
}

export default Logo
