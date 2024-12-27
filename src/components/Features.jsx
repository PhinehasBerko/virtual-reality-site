import {features} from '../constants/index'
const Features = () => {
  return (
    <div className="mt-20 justify-center items-center flex flex-col mx-auto container px-10">
        <h2 className="uppercase text-orange-600">Feature</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl mt-10 tracking-wide">Easily build <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">your code</span></h3>
        <div className="flex flex-wrap lg:mt-10 mt-5 ">
            {features.map((feature, index) => (
                <div key={index} className=" flex w-full lg:w-1/3 sm:w-1/2">
                    <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full'>
                        {feature.icon}
                    </div>
                    <div className=''>
                    <h4 className="mt-1 mb-6 text-xl">{feature.text}</h4>
                    <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features