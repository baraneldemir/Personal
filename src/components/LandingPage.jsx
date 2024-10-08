
import './LandingPage.css'
import pp from '../img/pp.jpeg'
export default function LandingPage() {


  



  return (
    <>
    <div className='flex flex-col -mt-24'>
      
        <section className='relative z-10 flex flex-col items-center bg-slate-400 h-dvh' >
          
        
          <section className="flex flex-col-reverse items-center justify-center h-screen text-center lg:flex-row">
            <div className="flex flex-col items-center mb-10 lg:mb-0 lg:w-1/2">
              <div>
                <h1 className="mb-10 text-3xl text-black font-monospace dark:text-white lg:text-5xl">
                  Hi! My name is <span className="text-orange">Baran Eldemir</span> and I am a web developer.
                </h1>
              </div>
              <div className="mb-10">
                <button>Swipe Down!</button>
              </div>
            </div>
            <div className="flex items-center justify-center w-1/2 mb-10 ">
              <img
              className='rounded-full'
                src={pp}
                alt="..."
                width={600}
                height={600}
                loading="eager"
              />
            </div>
          </section>
            
          <div className="curve after:bg-slate-400 before:bg-slate-700 "></div>
        </section>
        <section className=' h-dvh bg-slate-700'>
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
