 import { Calendar, Phone, Mail, MapPin, Github , Globe ,Facebook, Linkedin} from 'lucide-react';
export default function Contact (){
    return <>
    <p className=' font-bold text-2xl'>Contact</p>
    <div className="grid grid-cols-2 gap-2 p-2 max-w-4xl mx-auto">
        <div>
            <div className="flex items-center gap-3 mt-2">
            <Calendar className="w-6 h-6 " />
            <p className="text-lg">
                <span className="font-semibold">Date:</span> 08/06/2001
            </p>
            </div>

            <div className="flex items-center gap-3 mt-2">
            <Phone className="w-6 h-6 " />
            <p className="text-lg">
                <span className="font-semibold">Phone:</span> 093 404 8758
            </p>
            </div>

            <div className="flex items-center gap-3 mt-2">
            <Mail className="w-6 h-6 " />
            <p className="text-lg">
                <span className="font-semibold">Email:</span> ngtram8601@gmail.com
            </p>
            </div>

            <div className="flex items-center gap-3 mt-2">
            <MapPin className="w-6 h-6 text-gray-700" />
            <p className="text-lg">
                <span className="font-semibold">Address:</span> District 8, Ho Chi Minh City
            </p>
            </div>
        </div>
        
        <div>
            <div className="flex items-center gap-3 mt-2">
            <Github  className="w-6 h-6 text-gray-700" />
            <p className="text-lg">
                <span className="font-semibold">Github:</span>{" "}
                <a href="https://github.com/lylian01?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                githud
                </a>
            </p>
            </div>

            <div className="flex items-center gap-3 mt-2">
            <Linkedin className="w-6 h-6 text-gray-700" />
            <p className="text-lg">
                <span className="font-semibold">Linkedin:</span>{" "}
                <a href="https://www.linkedin.com/in/tram8601/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                linkedin
                </a>
            </p>
            </div>

            <div className="flex items-center gap-3 mt-2">
            <Facebook  className="w-6 h-6 text-gray-700" />
            <p className="text-lg">
                <span className="font-semibold">Facebook:</span>{" "}
                <a href="https://www.facebook.com/NgocTram.862001/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                facebook
                </a>
            </p>
            </div>
        
            <div className="flex items-center gap-3 mt-2">
            <Globe className="w-6 h-6 text-gray-700" />
            <p className="text-lg">
                <span className="font-semibold">Portfolio:</span>{" "}
                <a href="https://portfolio-bice-five-nsfs23lj4s.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                portfolio
                </a>
            </p>
            </div>
        </div>
    </div>

    </>
}