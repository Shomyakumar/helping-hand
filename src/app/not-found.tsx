import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='bg-custom-white '>
      <div className='max-w-[1160px] h-[80vh] mx-auto p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center gap-4'>
        <h2 className=' text-4xl mt-6 font-bold font-nunito '>Page Not Found </h2>
        <p className='text-lg font-semibold text-center'>Could not find requested resource</p>
        <Link href="/" className=' mx-auto bg-custom-yellow rounded-md font-semibold px-4 py-2 hover:scale-105 transition-transform duration-200'>Return Home</Link>
      </div>
    </div>
  )
}