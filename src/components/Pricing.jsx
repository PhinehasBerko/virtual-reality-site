import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center my-8 tracking-wider">Pricing</h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((option, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                    <div className="p-10 border border-neutral-700 rounded-md shadow-lg">
                        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-3">
                            {option.title}
                            {option.title === "Pro" && <span className="text-lg bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text text-">{" "}(Most Popular)</span>}
                        </p>
                        <p className="mb-8">
                            <span className="text-5xl mt-6 mr-2">{option.price}</span>
                            <span className="text-neutral-400 ">/Month</span>
                        </p>
                        <ul >
                            {option.features.map((feature, index) =>(
                            <li className="mt-8 items-center flex " key={index}>
                                <CheckCircle2/><span className="ml-3">{feature}</span>
                                </li>
                        ))}
                        </ul>
                        <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-700 duration-200 border rounded-md border-orange-900 ">Subcribe</a>
                    </div>
                </div>

            ))}
        </div>
    </div>
  )
}

export default Pricing