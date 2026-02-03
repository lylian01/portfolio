export default function Experinece (){
    return <>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* Experience 1 */}
    <div>
        <p className="text-4xl font-bold text-center mb-8">Experience</p>
        <div className="bg-white rounded-2xl p-8 shadow-lg 
                    transition-all duration-300 
                    hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-semibold">
                Winform Developer 
                </h3>
                <span className="text-base text-gray-500">
                02/2023 - 05/2024
                </span>
            </div>

            <p className="text-gray-600 font-medium mb-4 text-lg">
                FUJINET SYSTEMS JSC
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg mb-3">
                <li>Develop and maintain desktop applications using VB and WinForms.</li>
                <li>Design user interfaces, handle events, and optimize application performance.</li>
                <li>Work with Oracle Database and Entity Framework.</li>
                <li>Assist in requirement analysis and propose technical solutions.</li>
            </ul>
        </div>
    </div>

    {/* Experience 2 */}
    <div>
        <p className="text-4xl font-bold mb-8">Other Working Experience</p>
        <div className="bg-white rounded-2xl p-8 shadow-lg 
                    transition-all duration-300 
                    hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-semibold">
                Data entry & software support
                </h3>
                <span className="text-base text-gray-500">
                10/2024 - 01/2026
                </span>
            </div>

            <p className="text-gray-600 font-medium mb-4 text-lg">
                BINH DIEN WHOLESALE MARKET
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
                <li>Enter invoices and tax documents into the internal software system</li>
                <li>Check and reconcile data to ensure accuracy and consistency</li>
                <li>Assist users in getting familiar with and using the management software</li>
            </ul>
            <p className="text-gray-600 text-base italic ">This role was taken during a family caregiving period while maintaining continuous working experience.</p>
        </div>
    </div>
    

  </div>

    </>
}