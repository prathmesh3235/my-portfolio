import React from 'react';
import { Linkedin, Quote, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const recommendationsData = [
  {
    name: "Kim Uhlendorf",
    position: "PhD Candidate in Consumer Behavior @ GSU / UoC",
    image: "/kim.jpeg",
    date: "October 15, 2024",
    text: "Prathmesh Doddanawar has been employed as a student assistant at the Institute for Sports Economics and Sports Management (Chair of Sports Business Administration) at the German Sport University Cologne since April 2023. As part of his duties, Mr. Doddanawar is responsible for supporting the institute's research as a computer scientist. His tasks encompass the development of an e-commerce website as part of a research project, including the setup of a database to track user activities. He also supported with the setup of different 3D models and their integration into the website. In fulfilling his tasks, Prathmesh has always shown the highest motivation and distinguished himself by an extraordinarily independent and flexible way of working. Prathmesh is well-versed in the use of several modern computer science languages and their application. Prathmesh has always shown impeccable behavior towards his colleagues and superiors. Future employers will find in him a particularly dedicated and independently working employee.",
    relationship: "managed Prathmesh directly"
  },
  {
    name: "Bernd Paulus",
    position: "CEO of BlinkBase | Decoding Opaque Markets",
    image: "/Bernd.jpeg",
    date: "March 3, 2024",
    text: "Prathmesh worked for us at azernis GmbH as a working student in software development from June 2023 to the end of January 2024. Prathmesh has made an outstanding contribution to our early-stage startup in many ways. As an early employee, he took on both frontend and infrastructure tasks and demonstrated his technical skills. Among other things, he was responsible for the implementation of a website design, improved the existing code and laid the first foundations for a cloud infrastructure in Azure. In addition to general IT knowledge, this required in-depth knowledge of JavaScript, React, nextJS and CSS. Prathmesh also demonstrated his skills in TailwindCSS, which he incorporated into the website in a refactoring on his own initiative. Prathmesh also made a positive impression with his independent way of working. Things that he did not know yet were worked out independently by him in a short time and understood down to the last detail. His intelligent questions, clever ideas and commitment made him the perfect candidate for this demanding position. Mr. Doddanawar also stood out for his ability to adapt existing designs to technical circumstances and to think ahead in terms of design.",
    relationship: "managed Prathmesh directly"
  }
];

const RecommendationCard = ({ recommendation }) => {
  return (
    <div className="relative backdrop-blur-sm bg-black/40 rounded-xl overflow-hidden border border-purple-900/20
               hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group">
      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      
      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                <img 
                  src={recommendation.image}
                  alt={recommendation.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
              <Linkedin className="w-3 h-3 text-white" />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">{recommendation.name}</h3>
            <p className="text-gray-400 text-sm">{recommendation.position}</p>
            <p className="text-gray-500 text-xs mt-1">{recommendation.date} • {recommendation.relationship}</p>
          </div>
        </div>
        
        {/* Recommendation Text */}
        <div className="mt-4 relative overflow-hidden">
          <Quote className="absolute top-0 left-0 w-8 h-8 text-purple-500/20 -translate-x-2 -translate-y-2" />
          <div className="group-hover:max-h-none max-h-40 transition-all duration-500">
            <p className="text-gray-300 pl-3 border-l-2 border-purple-500/30">
              {recommendation.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Recommendations = () => {
  return (
    <div className="py-16 px-4 bg-[#0a0a0a]" id="recommendations">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Linkedin className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Recommendations
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {recommendationsData.map((rec, index) => (
            <RecommendationCard 
              key={index} 
              recommendation={rec}
            />
          ))}
        </div>

        {/* View More on LinkedIn Button */}
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/prathmeshdoddanawar/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                     bg-gradient-to-r from-blue-600/20 to-purple-600/20 
                     border border-blue-500/30 hover:border-blue-500/50
                     text-white font-medium
                     transition-all duration-300
                     hover:shadow-lg hover:shadow-blue-500/10"
          >
            <span>View all recommendations on LinkedIn</span>
            <div className="p-1.5 rounded-full bg-blue-500 text-white">
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;