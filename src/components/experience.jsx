export default function Experinece (){
    return <>
  <div className="grid grid-cols-1 gap-4">
    {/* Experience 1 */}
    <div>
        <p className="text-4xl font-bold mb-5">Experience</p>
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
                <li>Developed and enhanced VB WinForms applications in an enterprise environment, delivering 15–20 feature
                    updates monthly or handling 1–2 major module upgrades or version migrations</li>
                <li>Resolved system and logic issues by analyzing requirements and debugging effectively, working with Oracle
                    Database and Entity Framework while performing self-testing before QA to ensure stable production releases
                    and optimized performance</li>
            </ul>
        </div>
    </div>
    {/* Experience 1 */}
    <div>
        <div className="bg-white rounded-2xl p-8 shadow-lg 
                    transition-all duration-300 
                    hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-semibold">
                PROJECT-BASED 
                </h3>
                <span className="text-base text-gray-500">
                08/2024 - 05/2025
                </span>
            </div>

            <p className="text-gray-600 font-medium mb-4 text-lg">
                FREELANCE FRONTEND DEVELOPER
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg mb-3">
                <li>Maintained and enhanced VB WinForms enterprise applications, implementing 15–20 new features and minor enhancements per month according to detailed design documents and client specifications.</li>
                <li>Contributed to 2–3 major version upgrades per month, supporting system improvements, module adjustments, and ensuring smooth deployment in production environments.</li>
                <li>Worked with Oracle Database and Entity Framework to handle data operations, maintain data integrity, and support feature implementation.</li>
                <li>Investigated and resolved application and logic-related issues through debugging and requirement analysis to maintain system stability.</li>
                <li>Performed self-testing before QA handover to ensure stable releases and reduce defects during testing phases.</li>
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
                10/2024 - 02/2026
                </span>
            </div>

            <p className="text-gray-600 font-medium mb-4 text-lg">
                BINH DIEN WHOLESALE MARKET
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
                <li>Handled invoice data entry, reconciliation, and user support for internal management software during a family
                    caregiving period</li>
            </ul>
        </div>
    </div>
    

  </div>

    </>
}