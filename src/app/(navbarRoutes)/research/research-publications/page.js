import NavigationPages from "@/app/utils/NavigationPages";
import React from "react";

export const metadata = {
    title: "Faculty Research Papers by Department - Saroj Educational Group",
    description: "Explore a collection of impactful research papers authored by faculty members across various departments, showcasing their contributions to advancements in technology, science, and engineering.",
  }
  
  
export default function page() {
  // Computer Science and Engineering data
  const csePublications = [
    {
      facultyName: "Dr. Shivi Chaturvedi",
      articleType: "International",
      articleTitle:
        "Digital Signal Processors (DSP) for 3G Mobile Communication Systems",
      journalConference: "International Journal on Emerging Technologies",
      year: 2010,
    },
    {
      facultyName: "Dr. Shivi Chaturvedi",
      articleType: "International",
      articleTitle:
        "Survey Paper on Reversible CPU Based on Logic Gate Structure",
      journalConference:
        "International Journal of Innovative Research in Computer and Communication Engineering",
      year: 2016,
    },
    {
      facultyName: "Dr. Shivi Chaturvedi",
      articleType: "International",
      articleTitle:
        "An Enhanced Clustering Based Technique for Congestion Control in VANET",
      journalConference:
        "International Journal of Innovative Research in Science, Engineering and Technology",
      year: 2016,
    },
    {
      facultyName: "Dr. Shivi Chaturvedi",
      articleType: "National",
      articleTitle: "Waste to Energy Conversion",
      journalConference:
        "National Journal of Engineering Science and Management",
      year: 2011,
    },
    {
      facultyName: "Dr. Shivi Chaturvedi",
      articleType: "National",
      articleTitle:
        "Use of Independent Component Analysis in Wireless Communication System",
      journalConference:
        "National Journal of Engineering Science and Management",
      year: 2011,
    },
    {
      facultyName: "Dr. Shivi Chaturvedi",
      articleType: "International",
      articleTitle:
        "Clinical Prediction on ML based Internet of Things for E-Health",
      journalConference:
        "International Journal of Data Informatics and Intelligent Computing (IJDIIC)",
      year: 2023,
    },
    {
      facultyName: "Dr. Shivi Chaturvedi",
      articleType: "International",
      articleTitle:
        "Implementing and Analyzing Machine Learning Models for Early Diabetes Detection: A Methodological Approach using Survey-based Data",
      journalConference:
        "International Conference on Energy Systems, Drives and Automations",
      year: 2024,
    },
    {
      facultyName: "Mr. Deepanshu Kumar",
      articleType: "International",
      articleTitle: "E-VOTING WEBSITE",
      journalConference:
        "International Journal of Novel Research and Development",
      year: 2024,
    },
  ];

  // Biotechnology data
  const biotechPublications = [
    {
      facultyName: "Mr. Rahul Kumar",
      articleType: "International",
      articleTitle:
        "Simultaneous Bioremediation of Diesel-Contaminated Soil and Water Ecosystems Using Mixed Culture of Acinetobacter baumannii IITG19 and Providencia vermicola IITG20",
      journalConference: "Environmental Technology",
      year: 2024,
    },
    {
      facultyName: "Mr. Rahul Kumar",
      articleType: "International",
      articleTitle:
        "Enhanced Bioremediation of Commercial Diesel Contamination by Mixed Culture of Newly Isolated Providencia vermicola IITG20 and Pseudomonas aeruginosa IITG21",
      journalConference: "International Journal of Environmental Research",
      year: 2024,
    },
    {
      facultyName: "Mr. Rahul Kumar",
      articleType: "International",
      articleTitle:
        "Enhanced Degradation of Petroleum Hydrocarbons by Klebsiella michiganensis RK and Acinetobacter baumannii IITG19 Isolated from Local Soil Sources",
      journalConference:
        "International Journal of Environmental Science and Technology",
      year: 2023,
    },
    {
      facultyName: "Mr. Rahul Kumar",
      articleType: "International",
      articleTitle:
        "Degradation Kinetics Study of Diesel by Mixed Culture of Acinetobacter baumannii IITG19 and Klebsiella michiganensis RK",
      journalConference:
        "International Conference on Petroleum, Hydrogen and Decarbonization",
      year: 2023,
    },
    {
      facultyName: "Mr. Rahul Kumar",
      articleType: "International",
      articleTitle:
        "Surfactant Assisted biodegradation of petroleum hydrocarbon by bacterial consortia",
      journalConference:
        "62nd Annual International Conference of Association of Microbiologists of India (AMI)",
      year: 2022,
    },
    {
      facultyName: "Mr. Rahul Kumar",
      articleType: "International",
      articleTitle:
        "Removal of Toluene from contaminated water by using isolated bacteria Klebsiella sp. And Acinetobacter sp",
      journalConference:
        "BioSangam 2022- an International conference on Emerging Trends in Biotechnology",
      year: 2022,
    },
    {
      facultyName: "Mr. Rahul Kumar",
      articleType: "International",
      articleTitle:
        "Exposure of Hydrocarbons on Klebsiella Michiganensis and its effect on the petroleum hydrocarbon utilisation",
      journalConference:
        "International Conference on Biotechnology for Resource Efficiency, Energy, Environment, Chemicals and Health",
      year: 2021,
    },
    {
      facultyName: "Mr. Rahul Kumar",
      articleType: "International",
      articleTitle:
        "Isolation and Screening of Petroleum Hydrocarbon Degrading Bacteria",
      journalConference:
        "International Conference on Engineering Sciences and Technologies for Environmental Care",
      year: 2020,
    },
    {
      facultyName: "Mr. Rahul Kumar",
      articleType: "International",
      articleTitle:
        "ATRA Modulates Gluconeogenesis and Triglyceride Biosynthesis Pathway of Liver in Elastase Induced Emphysematous Rats",
      journalConference: "Journal of Experimental and Applied Animal Sciences",
      year: 2017,
    },
    {
      facultyName: "Mr. Rahul Kumar",
      articleType: "International",
      articleTitle:
        "Isolation and Study of Antibacterial Activity of Protein from Ganoderma lucidum",
      journalConference:
        "International conference on environment, health and industrial biotechnology",
      year: 2013,
    },
    {
      facultyName: "Dr. Neeraj Kumar Dixit",
      articleType: "International",
      articleTitle:
        "Design of Monovalent and Chimeric Tetravalent Dengue Vaccine Using an Immunoinformatic Approach",
      journalConference:
        "International Journal of Peptide Research and Therapeutics",
      year: 2021,
    },
    {
      facultyName: "Dr. Neeraj Kumar Dixit",
      articleType: "International",
      articleTitle:
        "Design of Epitope Based Vaccine for Dengue Virus Using Immunoinformatic Approach",
      journalConference:
        "International Journal of Peptide Research and Therapeutics",
      year: 2021,
    },
    {
      facultyName: "Dr. Neeraj Kumar Dixit",
      articleType: "International",
      articleTitle:
        "Identification of dengue virus proteome B-cell epitopes using an immunoinformatic approach",
      journalConference: "Journal of Applied Pharmaceutical Science",
      year: 2021,
    },
    {
      facultyName: "Dr. Neeraj Kumar Dixit",
      articleType: "International",
      articleTitle:
        "Using immunoinformatic approach design epitope-based vaccine for Chikungunya virus",
      journalConference:
        "International Journal of Pharmaceutical Sciences and Research",
      year: 2022,
    },
    {
      facultyName: "Dr. Neeraj Kumar Dixit",
      articleType: "International",
      articleTitle:
        "Design in-silico multi-pathogenic vaccine of dengue and zika viruses using envelope protein",
      journalConference:
        "International Journal of Pharmaceutical Sciences and Research",
      year: 2022,
    },
    {
      facultyName: "Dr. Neeraj Kumar Dixit",
      articleType: "International",
      articleTitle:
        "Design of Epitope- based vaccine for Dengue virus using Immunoinformatic approach",
      journalConference:
        "International Journal on Life Science and Bioengineering",
      year: 2018,
    },
    {
      facultyName: "Dr. Neeraj Kumar Dixit",
      articleType: "International",
      articleTitle:
        "Using an immunoinformatic approach, identification of B-cell envelope proteome for multipathogenic dengue and Zika viruses",
      journalConference:
        "International Journal of Pharmaceutical Sciences and Research",
      year: 2022,
    },
    {
      facultyName: "Dr. Neeraj Kumar Dixit",
      articleType: "International",
      articleTitle:
        "Design of Vaccine Targeting Zika Virus Polyprotein by immunoinformatics technique",
      journalConference:
        "International Journal of Peptide Research and Therapeutics",
      year: 2022,
    },
    {
      facultyName: "Dr. Neeraj Kumar Dixit",
      articleType: "International",
      articleTitle:
        "Epitope-based vaccine candidates developing against a life-threatening illness identified in silico approach",
      journalConference: "High Technology Letter",
      year: 2024,
    },
    {
      facultyName: "Dr. Neeraj Kumar Dixit",
      articleType: "International",
      articleTitle:
        "Implementation of immunoinformatics approach to design an epitope vaccine against Dengue infection",
      journalConference: "High Technology Letter",
      year: 2024,
    },
    {
      facultyName: "Dr. Neeraj Kumar Dixit",
      articleType: "International",
      articleTitle:
        "In Silico strategies for predicting Therapeutic Peptides targeting the Capsid Protein of the Dengue Virus",
      journalConference: "Journal of Proteins and Proteomics",
      year: 2024,
    },
    {
      facultyName: "Dr. Neeraj Kumar Dixit",
      articleType: "International",
      articleTitle:
        "Constructing a multi-epitope vaccine construct using in silico approach to combat against Dengue infection",
      journalConference: "Journal of Proteins and Proteomics",
      year: "In processing",
    },
  ];

  // Civil Engineering data
  const civilPublications = [
    {
      facultyName: "MINTOO KUMAR",
      articleType: "International",
      articleTitle:
        "STUDY ON THE EFFECT AND CAUSE OF BLAST LOADING ON REINFORCED STRUCTURES",
      journalConference:
        "Journal of Huazhong University of Science and Technology",
      year: 2021,
    },
    {
      facultyName: "MINTOO KUMAR",
      articleType: "International",
      articleTitle:
        "THE EFFECT AND CAUSE OF BLAST LOADING ON REINFORCED STRUCTURES",
      journalConference:
        "Journal of Huazhong University of Science and Technology",
      year: 2021,
    },
  ];

  // Electrical Engineering data
  const electricalPublications = [
    {
      facultyName: "Er. Sameer Bajpai",
      articleType: "International",
      articleTitle:
        "Speed Control of DC Motor using PID Controller FED H-Bridge",
      journalConference:
        "International Journal of Innovative Technology and Exploring Engineering (IJITEE)",
      year: 2020,
    },
    {
      facultyName: "Er. Sameer Bajpai",
      articleType: "International",
      articleTitle:
        "ANALYISNG OF GRID CONNECTED WIND POWER GENERATION USING DOUBLY FED INDUCTION GENERATOR",
      journalConference:
        "International Journal of Collaborative Research in Engineering Sciences",
      year: 2020,
    },
  ];

  // Mechanical Engineering data
  const mechanicalPublications = [
    {
      facultyName: "PANKAJ VERMA",
      articleType: "International",
      articleTitle: "FABRICATION OF HYBRID SOLAR DRYER",
      journalConference:
        "International Journal of Scientific and Research Publications",
      year: 2015,
    },
    {
      facultyName: "PANKAJ VERMA",
      articleType: "International",
      articleTitle: "REVIEW ON THERMAL ANALYSIS OF WIND CATCHER",
      journalConference:
        "Journal of Emerging Technologies and Innovative Research",
      year: 2023,
    },
    {
      facultyName: "PANKAJ VERMA",
      articleType: "International",
      articleTitle: "THERMAL ANALYSIS OF WIND CATCHER USING COOLING PADS",
      journalConference:
        "Journal of Emerging Technologies and Innovative Research",
      year: 2023,
    },
    {
      facultyName: "PANKAJ VERMA",
      articleType: "International",
      articleTitle:
        "DRYING BEHAVIOUR INVESTIGATION OF SOLAR DRYER USING POLYTHENE",
      journalConference:
        "IOSR Journal of Mechanical and Civil Engineering(IOSR-JMCE)",
      year: 2024,
    },
    {
      facultyName: "PANKAJ VERMA",
      articleType: "International",
      articleTitle: "REVIEW PAPER ON DIFFERENT TYPES OF SOLAR DRYER",
      journalConference:
        "International Journal for Research in Applied Science & Engineering Technology",
      year: 2024,
    },
    {
      facultyName: "VED PRAKASH SHARMA",
      articleType: "International",
      articleTitle: "STRAIN LOCALIZATION BELOW THE ROOT OF AN YIELDING NOTCH",
      journalConference:
        "International Journal of Engineering Fracture Mechanics",
      year: 1984,
    },
  ];

  // Department table component to avoid repetition
  const DepartmentTable = ({ title, publications, color }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4" style={{ color }}>
        {title}
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border-b text-left">Faculty Name</th>
              <th className="py-3 px-4 border-b text-left">Article Type</th>
              <th className="py-3 px-4 border-b text-left">Article Title</th>
              <th className="py-3 px-4 border-b text-left">
                Journal/Conference
              </th>
              <th className="py-3 px-4 border-b text-left">Year</th>
            </tr>
          </thead>
          <tbody>
            {publications.map((pub, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="py-3 px-4 border-b">{pub.facultyName}</td>
                <td className="py-3 px-4 border-b">{pub.articleType}</td>
                <td className="py-3 px-4 border-b">{pub.articleTitle}</td>
                <td className="py-3 px-4 border-b">{pub.journalConference}</td>
                <td className="py-3 px-4 border-b">{pub.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Research & Publication content
  const researchContent = (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-purple-800">
        Research & Publication
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <p className="mb-6 text-gray-700">
          The Research and Development (R&D) activities in SEG are aimed at
          interdisciplinary understanding of complex problems related to
          engineering, health and environment. The primary objective of R&D has
          been the creation and transfer of new technologies for improvement of
          society at large. The major thrust areas of the research pursuits are
          the areas of renewable energy, sustainable development, artificial
          neural networks, genetic engineering, cancer biology,
          nano-biotechnology, molecular cell biology, molecular immunology,
          molecular toxicology, bioinformatics, plant biotechnology,
          pharmaceutical sciences and engineering disciplines.
        </p>

      <div>
      <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>
            Ravendra Ratan Singh Jandail, International Journal Ubicomp. "A
            Proposed Nobel Approach for Sentiment Analysis and Opinion Mining"
            April 2014 (Unpaid journal)
          </li>
          <li>
            Ritu Sindhu, Ravendra Ratan Singh Jandail and Abdul Wahid
            International Annual Conference On Electrical, Electronics,
            Mechanical and Computer Science and Engineering. "A Multi Agent
            Framework for Immediate Messaging" Held in Pune on 29 December 2013.
          </li>
          <li>
            Ravendra Ratan Singh and Ritu Sindhu "Globalised Telecom Revolution:
            A Survey of Wireless Communication Technology" in "International
            Journal of Advance Research in Computer Science and Communication
            Engineering" October 2013
          </li>
          <li>
            Ravendra Ratan Singh Jandail, Pradeep Sharma & Chetan Agrawal "A
            Survey of Sentiment Analysis and Opinion Mining: A Need for an
            Organization and Requirement of a Customer" Accepted in
            International conference on emerging technology and advance in
            engineering, Tamjhin Tamilnadu Feb 2014.
          </li>
          <li>
            Pinki, Nida "A Comprehensive Analysis of Existing Load Balancing
            Algorithms in Cloud Network", International Journal of Science and
            Research (IJSR), Volume 3 Issue 5, May 2014.
          </li>
          <li>
            Rahul Verma, Joydip Dhar "Online Spam Filter for Duplicate or Near
            Duplicate Message Content Detection Scheme", JCIT: Journal of
            Convergence Information Technology, Vol. 9, No. 4, pp. 23 ~ 30, 2014
          </li>
          <li>
            Neeraj Mishra and Lalit Kumar Singh (2008) "comparative studies to
            determine the effect of the media constituents for acid protease
            production by submerged fermentation", Asian Jr. of Microbial
            Biotech Env Sc. Vol. 10(3): 21-25
          </li>
          <li>
            Neeraj Mishra, Akhilesh Dubey, Shashikant & Gopal Tewari
            (2008),"Environmental Control: A Nano technological Approach"
            NATIONAL SEMINAR on "Recent Strategies of Management, Technology &
            Environmental Control" S. D. College of Engineering and Technology.
          </li>
          <li>
            Neeraj Mishra, Gopal Tewari, Akhilesh Dubey & Shashikant (2008),
            "Nanotechnology: An Advance Approach To Food And Medical Industry"
            NATIONAL CONFERENCE on Emerging Technologies, Integral University
          </li>
          <li>
            Shri Ram Chaurasia and Shashikant (2007), "Removal Basic Dye From
            Aqueous Solution Using Natural Adsorbents: Equilibrium And Diffusion
            Studies", Indian Journal Of Environmental Protection, Vol.27, No.6,
            pp 538-544.
          </li>
          <li>
            Shri Ram Chaurasia and Shashikant (2007),"Removal Basic Dye From
            Aqueous Solution Using Natural Adsorbents: Kinetic Studies", Indian
            Journal Of Environmental Protection, Vol.27, No.9, pp 782-788.
          </li>
          <li>
            Neeraj Mishra (2006) "Medicinal Nano biotechnology Robots". Genesis
            H.B.T.I., Kanpur
          </li>
          <li>
            Neeraj Mishra (2006) "Immobilized Antibody Based Bio-Electronic
            Sensor(IABBES)" Genesis H.B.T.I., Kanpur
          </li>
          <li>
            Neeraj Mishra (2006) "Applying Cancerous Glycolytic Deregulation
            Blueprint (CGDB) for Metabolite Overproduction in Microorganism"
            Genesis H.B.T.I., Kanpur
          </li>
          <li>
            Vinod Bihari, Vandana Praveen, Divya Tripathi & C.K.M. Tripathi
            (2008). Nutritional regulation of actinomycin-D production by a new
            isolate of Streptomyces sindenensis using statistical methods.
            Indian J. Exp. Biol., 46, 60-65
          </li>
          <li>
            Sarveshwar pande "How to have an effective advertising?",
            www.indianmba.com
          </li>
          <li>
            Sarveshwar pande "Credit Management- strategies to improve your
            rating", www.indianmba.com
          </li>
          <li>
            Shilpee Adhikari "Women entrepreneur- New face of a woman",
            www.indianmba.com
          </li>
          <li>
            Shilpee Adhikari "Retail-through Indian Perspective",
            www.indianmba.com
          </li>
          <li>
            Shilpee Adhikari "Stress management an Spice of Life",
            www.indianmba.com
          </li>
          <li>
            Shilpee Adhikari "Changing Dimensions of Rural Health",
            www.indianmba.com
          </li>
          <li>
            Shilpee Adhikari "National Customer Relation Management" Conference
            & Seminar on Management Beyond Repertoire, Institute: School of
            Management Sciences, Varanasi
          </li>
          <li>
            Shilpee Adhikari "Advancement in Executive Development Program",
            National Seminar on Advancement In Management, Sagar Institute of
            Technology & Management, Lucknow.
          </li>
          <li>
            Surabhi Agarwal "Is Indian Economy A Factor For the Growth of Retail
            Business in India?", A National Journal 'Management Today'.
          </li>
          <li>
            Surabhi Agarwal "Child Labor in Industries", A National Journal
            'Urban Panorama'.
          </li>
          <li>Surabhi Agarwal "Have a positive Attitude", www.indianmba.com</li>
          <li>
            Surabhi Agarwal "The Food for an Organization", www.indianmba.com
          </li>
          <li>
            Surabhi Agarwal "Managing The Time Effectively", www.indianmba.com
          </li>
          <li>
            Surabhi Agarwal "Contract Farming: An Implication For The Corporate
            World", International Conference on Land Use Land Cover & Agro
            Biodiversity, National PG College, Lucknow.
          </li>
          <li>
            Surabhi Agarwal "Changing Trends of Retail Scenario Towards
            Modernization in India", National Seminar on Organized Retailing in
            India: Issues & Concerns, University of Lucknow, Lucknow.
          </li>
          <li>
            Pooja Sinha "Growth of Retailing in India". National Seminar on
            Retailing in India, Mahatma Gandhi Kashi Vidyapeeth University,
            Varanasi
          </li>
          <li>
            Pooja Sinha "Role of E-CRM in present Business Scenario", National
            Seminar on Role of Information Technology in Present Scenario,
            School of Management Sciences, Varanasi.
          </li>
          <li>
            Pooja Sinha "Benchmarking approach to step ahead", www.indianmba.com
          </li>
          <li>
            Pooja Sinha "Rural health management in present scenario",
            www.indianmba.com
          </li>
          <li>
            Gaurav Bajpai & Ms. Rashmi Chaudhary "Working groups that succeed in
            a Dynamic Environment", www.indianmba.com
          </li>
          <li>
            Ashish Kumar Trivedi, Dr. S. Q. Abbas, Mr. Bhawesh Kumar Thakur, Mr.
            U.K. Farooqui., Mr. Sheenu Rizavi, Mr. S. Hadi "Integration of
            Event-Driven Web Services into Data Intensive Websites", National
            Conference on Emerging Technologies(NCET-08), Integral University,
            Lucknow.
          </li>
          <li>
            Bhawesh Kumar Thakur, Dr. S. Q. Abbas, Mr. Ashish Kumar Trivedi "An
            Efficient Approach to Personalize the Web Usage Data through
            Recommendation logic", National Conference on Emerging
            Technologies(NCET-08), Integral University, Lucknow.
          </li>
          <li>
            Amit Saxena "An Infrastructure Multimedia Meta Data Management",
            National Conference on Emerging Technologies (NCET-08), Integral
            University, Lucknow.
          </li>
          <li>
            D. D. Verma "An Identity of English August By Upmanyu Chatterjee",
            Literature and Identity, Lucknow University, Lucknow.
          </li>
        </ul>
      </div>
      </div>
    </div>
  );

  return (
    <>
    <div className=" w-full h-[26vh] md:h-[40vh] lg:h-80 ">
    <img
      src="/PlacementBanner.PNG"
      alt="History of Seg Banner"
      className="w-full h-full object-fit"
    />
  </div>

  <div>
    <NavigationPages/>
  </div>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
      Faculty Research Papers by Department
      </h1>

      <DepartmentTable
        title="Computer Science and Engineering (CSE)"
        publications={csePublications}
        color="#1e40af"
      />

      <DepartmentTable
        title="Biotechnology"
        publications={biotechPublications}
        color="#166534"
      />

      <DepartmentTable
        title="Civil Engineering"
        publications={civilPublications}
        color="#9d174d"
      />

      <DepartmentTable
        title="Electrical Engineering"
        publications={electricalPublications}
        color="#854d0e"
      />

      <DepartmentTable
        title="Mechanical Engineering"
        publications={mechanicalPublications}
        color="#713f12"
      />

      {researchContent}
    </div>
    </>
  );
}
