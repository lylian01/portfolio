import { X } from 'lucide-react';
import { useState } from 'react';
import huflit from "../img/huflit-cer.jpg" ;

export default function Education() {
    const [selectedImage, setSelectedImage] = useState(null);

    return <>
    <div className='grid grid-cols-1 lg:grid-cols-8 '>
      <div className='lg:col-span-2 pl-12'>
        <p className='font-bold text-4xl mb-3'>Education</p>
      </div>
      <div className='lg:col-span-6 '>
          <div className='py-2'>
            <p className=' text-2xl font-bold'>HCMC University of Foreign Languages - Information Technology ( HUFLIT )</p>
            <div className='flex justify-between items-end'>
              <div>
                <p className='text-xl mt-2'>Year: 09/2019 - 07/2023</p>
                <p className='text-xl mt-2'>Major: Software engineering</p>
                <p className='text-xl mt-2'>GPA : 7.41 / 10</p>
              </div>
              <img 
                    src={huflit}
                    alt="HUFLIT Certificate"  
                    className='h-20 object-cover rounded cursor-zoom-in hover:opacity-80 transition '
                    onClick={() => setSelectedImage(`${huflit}`)}
                />
            </div>
            <hr className='mt-3'/>
          </div>
          <div className='py-2 mt-2'>
            <p className=' text-2xl font-bold'>T3H Information Technology Institute ( T3H-ITI ) </p>
            <div className='flex justify-between items-end'>
              <div>
                <p className='text-xl mt-2'>Year: 07/2025 - 12/2025</p>
                <p className='text-xl mt-2'>Course : Frontend development with ReactJS</p>
              </div>
               {/* <img 
                    src="src/img/t3h-cer.jpg" 
                    alt="T3H Certificate"  
                    className='h-20 object-cover rounded cursor-zoom-in hover:opacity-80 transition'
                    onClick={() => setSelectedImage('src/img/t3h-cer.jpg')}
                /> */}
            </div>
          </div>
      </div>
    </div>

    {selectedImage && (
        <div 
        className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4'
        onClick={() => setSelectedImage(null)}
        >
        <div className='relative max-w-4xl max-h-full'>
            <button 
            className='absolute -top-10 right-0 text-white hover:text-gray-300'
            onClick={() => setSelectedImage(null)}
            >
            <X className='w-8 h-8' />
            </button>
            <img 
            src={selectedImage} 
            alt="Certificate" 
            className='max-w-full max-h-screen object-contain rounded'
            onClick={(e) => e.stopPropagation()}
            />
        </div>
        </div>
    )}
    </>
}