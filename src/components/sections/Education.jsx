import {
  GraduationCap,
  BookOpen,
  School,
  Building2,
  Star,
} from "lucide-react";

import FadeIn from "../animations/FadeIn";

export default function Education() {
  const data = [
    {
      year: "2023 - 2025",
      title: "Master of Computer Applications (MCA)",
      place: "GH Raisoni University Amravati",
      desc: "Specialized in Web Development & Software Engineering.",
      score: "7.89 CGPA",
      icon: GraduationCap,
      latest: true,
    },
    {
      year: "2020 - 2023",
      title: "Bachelor of Computer Applications (BCA)",
      place: "GH Raisoni Institute of Engineering and Technology Nagpur",
      desc: "Strong foundation in programming & web technologies.",
      score: "7.05 CGPA",
      icon: BookOpen,
    },
    {
      year: "2018 - 2020",
      title: "Higher Secondary (12th)",
      place: "St. Francis De Sales High School & Junior College Nagpur",
      desc: "Science Stream (PCMB)",
      score: "61.54%",
      icon: School,
    },
    {
      year: "2018",
      title: "Secondary School (10th)",
      place: "St. Joseph's Convent High School Kamptee, Nagpur",
      desc: "Excellent academic performance",
      score: "84.20%",
      icon: Building2,
    },
  ];

  return (
    <section id="journey" className="bg-black text-white py-16 px-4 sm:px-6 md:px-10">
      
      {/* Heading */}

      <FadeIn delay={100}>

         <div className=' text-center mb-16'>
                       <div className=' inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6'>
                       <GraduationCap className=' w-4 h-4 text-primary' />
                       <span className=' text-sm text-primary font-medium'>MY JOURNEY</span>
                   </div>
                   <h2 className=' text-3xl lg:text-4xl font-bold text-white mb-4'>
                       Education
                   </h2>
                    <div className="w-16 h-[2px] bg-yellow-500 mx-auto mt-3"></div>
               </div>


      </FadeIn>

       
    

      {/* Grid Layout */}

      <FadeIn delay={200}>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">

        {data.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="border border-primary/20 rounded-xl p-5 sm:p-6 bg-gradient-to-b from-primary/5 to-transparent hover:border-primary hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
            >
              
              {/* Top Row */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs sm:text-sm text-primary">
                  {item.year}
                </span>

                {item.latest && (
                  <span className="flex items-center gap-1 text-xs px-2 py-1 border border-primary rounded-full text-primary">
                    <Star size={12} /> Latest
                  </span>
                )}
              </div>

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-primary text-primary">
                  <Icon size={18} />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>
              </div>

              {/* Place */}
              <p className="text-primary text-sm">
                {item.place}
              </p>

              {/* Desc */}
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>

              {/* Divider */}
              <div className="border-t border-primary/20 mt-4 pt-3 flex justify-between items-center">
                <span className="text-gray-400 text-xs sm:text-sm">
                  Score
                </span>
                <span className="text-primary font-semibold">
                  {item.score}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      </FadeIn>

      
    </section>
  );
}