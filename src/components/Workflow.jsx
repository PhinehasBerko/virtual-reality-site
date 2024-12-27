import code from '../assets/code.jpg'
import { CheckCircle } from 'lucide-react'
import {checklistItems} from '../constants/index'
const Workflow = () => {
  return (
    <div className='container mx-auto px-10'>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl mt-20">Accelerate your <span className='bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'>coding workflow</span></h2>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-15 mt-10'>
            <img className="w-1/2" src={code} alt="code image"/>
            <div>
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex items-center  mt-5 px-5 py-3 rounded-md bg-neutral-900">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                        <div className=''>
                            <h4 className="text-lg">{item.title}</h4>
                            <p className="text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Workflow