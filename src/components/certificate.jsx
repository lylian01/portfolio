import { X } from 'lucide-react';
import { useState } from 'react';
import eng from "./img/eng-cer.jpg";

export default function Certificate(){
    const [selectedImage, setSelectedImage] = useState(null);
    return<>
    <div className="">
        <p className="text-4xl font-bold text-center my-10">Certificate</p>
        <div className='grid grid-cols-3'>
            <div className='mx-auto'>
                <img 
                        src={eng}
                        alt="English Certificate"  
                        className='h-30 object-cover rounded cursor-zoom-in hover:opacity-80 transition '
                        onClick={() => setSelectedImage('src/img/eng-cer.jpg')}
                    />
                <p className="text-2xl mt-5 mb-2">English - TOEIC </p>
                <p className="text-xl">Test Date : 12/2024</p>
            </div>
            <div className='mx-auto'>
                <img 
                        src="src/img/japan-cer.jpg" 
                        alt="Japanese Certificate" 
                        className='h-30 object-cover rounded cursor-zoom-in hover:opacity-80 transition'
                        onClick={() => setSelectedImage('src/img/japan-cer.jpg')}
                    />
                <p className="text-2xl mt-5 mb-2">Japanese</p>
                <p className="text-xl">Test Date : 07/2025</p>
            </div>
            <div className='mx-auto'>
                <img 
                        src="src/img/python-cer.jpg" 
                        alt="Python Certificate"  
                        className='h-30 object-cover rounded cursor-zoom-in hover:opacity-80 transition'
                        onClick={() => setSelectedImage('src/img/python-cer.jpg')}
                    />
                <p className="text-2xl mt-5 mb-2">Python</p>
                <p className="text-xl">Issue date : 10/2025</p>
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