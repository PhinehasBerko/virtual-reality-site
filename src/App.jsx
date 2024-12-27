import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Workflow  from './components/Workflow'
import Pricing from './components/Pricing'
const  App =() => {

  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
      <Hero />
      </div>
      <Features />
      <Workflow />
      <Pricing/>
    </>
  )
}

export default App
