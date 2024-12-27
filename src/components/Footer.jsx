import {resourcesLinks, platformLinks, communityLinks} from '../constants/index'

const Footer = () => {
  return (
    <footer className="border-t border-neutral-700 bg-neutral-900 mt-20 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  py-10">
            <div className='flex  flex-1 flex-col  justify-center px-20'>
                <h3 className='text-md font-semibold mb-4'>Resources</h3>
                <ul className='space-y-2'>
                    {resourcesLinks.map((link, index) => (
                        <li key={index} className='mb-2 text-gray-400'>
                            <a  href={link.href} className='hover:text-white'>{link.text}</a>
                        </li>
                        ))}
                </ul>
            </div>
            <div className='flex flex-col  justify-center px-20'>
                <h3 className='text-md font-semibold mb-4'>Platforms</h3>
                <ul className='space-y-2'>
                    {platformLinks.map((link, index) => (
                        <li key={index} className='mb-2 text-gray-400'>
                            <a  href={link.href} className='hover:text-white'>{link.text}</a>
                        </li>
                        ))}
                </ul>
            </div>
            <div className='flex flex-col  justify-center px-20'>
                <h3 className='text-md font-semibold mb-4'>Community</h3>
                <ul className='space-y-2'>
                    {communityLinks.map((link, index) => (
                        <li key={index} className='mb-2 text-gray-400'>
                            <a  href={link.href} className='hover:text-white'>{link.text}</a>
                        </li>
                        ))}
                </ul>
            </div>
        </div>
        <div className='text-center text-md italic text-gray-700'>Copyright &copy; 2024 Phiny✨🚀</div>
    </footer>
  )
}

export default Footer