import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
const Hero = () => {
  return (
    <div className="container mx-auto  mt-6 lg:mt-20  px-5 md:px-10 text-center items-center justify-center ">
        <p className="text-2xl sm:text-4xl md:text-6xl tracking-wide mb-10">VirtualR build tools <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text "> for<br/> developers</span></p>
        <p className='mx-5'>Empower your creativity and brign you VR app ideas to life with our intuitive development tools.</p>
        <p className='mx-5'>Get started today and turn your imagination into immersive reality</p>
        <div className=" items-center justify-center flex mt-5 gap-5  flex-col flex-1 sm:flex-row">
            <button className="border text-[15px] mb-5  sm:mb-0 text-wrap p-2 sm:p-2 md:text-lg md:py-2  md:px-5 rounded-md hover:scale-95 duration-200">Start for free</button>
            <button className="px-5 -mt-5 sm:mt-0 py-2 rounded-md bg-gradient-to-r from-orange-400 to-orange-600 md:text-lg hover:scale-95 duration-200">Documentation</button> 
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-5">
            <video className="md:h-60 rounded-md border border-orange-500 hover:scale-105 duration-200" autoPlay loop muted>
                <source src={video1} type="video/mp4" className='h-20 w-30' />
            </video>
            <video className="md:h-60 rounded-md border border-orange-500 hover:scale-105 duration-200 " autoPlay loop muted>
                <source src={video2} type="video/mp4" />
            </video>
        </div>
    </div>
  )
}

export default Hero