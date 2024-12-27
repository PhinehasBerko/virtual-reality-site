import { testimonials } from "../constants/index"
const Testimonials = () => {
  return (
    <div  className="mt-20 tracking-wide items-center justify-center max-w-7xl mx-auto px-6">
        <h2 className="text-center text-lg sm:text-xl md:text-3xl lg:text-5xl">What People are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-5 ">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="p-4 border border-neutral-700 bg-neutral-900 rounded-md shadow-lg my-4">
                    <p className="text-left text-sm space-y-1 font-thin">{testimonial?.text}</p>
                    <div className="flex items-center mt-4">
                        <img src={testimonial?.image} className="w-12 h-12 rounded-full" alt="Testimonials images" />
                        <div className="ml-4">
                        <div className="text-sm text-gray-500">{testimonial?.user}</div>
                        <div className="text-sm text-gray-500 italic">{testimonial?.company}</div>
                        </div>
                    </div>

                </div>)) }
        </div>
    </div>
  )
}

export default Testimonials