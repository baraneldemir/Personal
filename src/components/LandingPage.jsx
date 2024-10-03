
import './LandingPage.css'
import pp from '../img/pp.jpeg'
export default function LandingPage() {


  



  return (
    <>
    <div className='flex flex-col '>
        <section className='relative z-10 flex flex-col items-center bg-slate-400 h-dvh' >
            <div className='flex flex-col items-center mt-48 w-60 h-60 md:flex-row '>
              <h1 className='w-full h-full text-3xl text-center'>Baran Eldemir</h1>
              <img src={pp} alt='...' className='object-cover w-full h-full text-3xl text-center rounded-full '></img>
            </div>
            
          <div className="curve after:bg-slate-400 before:bg-slate-700 "></div>
        </section>
        <section className=' h-96 bg-slate-700'>
          <div className='mt-28 h-96'></div>
              <div className='relative mx-24 bg-gray-400 h-96 '>
                <h1 className='absolute text-3xl text-center translate-x-1/2 top-5 right-1/2'>Skills</h1>
                <ul className='flex flex-col'>
                  <li>hello</li>
                  <li>hello</li>
                  <li>hello</li>
                  <li>hello</li>
                  <li>hello</li>
                  <li>hello</li>
                </ul>

              </div>
        </section>
        <section className=' h-dvh bg-slate-700'>
              

              
        </section>
    </div>
    </>
  )
}
