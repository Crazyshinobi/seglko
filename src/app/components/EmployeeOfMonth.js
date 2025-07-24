import { FaTrophy, FaAward } from 'react-icons/fa';

const EmployeeOfTheMonth = () => {
  const winners = [
    {
      name: "Umesh Kumar",
      image: "/employee/EmployeeOfTheMonth1.jpeg", 
      achievement: "Outstanding Performance",
      reward: "Cash Award",
      year: "June 2025"
    },
    {
      name: "Manish Kumar",
      image: "/employee/EmployeeOfTheMonth2.jpeg", 
           achievement: "Outstanding Performance",
      reward: "Cash Award",
      year: "June 2025"
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-full p-3 mb-4">
            <FaTrophy className="text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Employees of the  <span className="text-amber-600">Month</span>
          </h2>
          <p className="text-lg text-gray-600">Recognizing outstanding contributions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {winners.map((winner, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={winner.image} 
                    alt={winner.name}
                    className="w-full h-64 md:h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-4">
                    <FaAward className="text-amber-500 mr-2" />
                    <span className="text-sm font-semibold text-amber-600">{winner.reward}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{winner.name}</h3>
                  <p className="text-gray-600 mb-4">{winner.achievement}</p>
                  <div className="bg-amber-50 text-amber-800 px-3 py-2 rounded-lg inline-flex items-center">
                    <span className="text-sm font-medium">{winner.year} Honoree</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default EmployeeOfTheMonth;