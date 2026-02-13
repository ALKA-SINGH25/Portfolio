import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";

export default function Achievements() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4">

      {/* Heading */}
      <div className="mb-16">
  <span className="text-3xl block mb-2">🏆</span>
  <Heading className="font-black">Achievements</Heading>
</div>


      <div className="space-y-10">

        {/* ConviSaaS Internship */}
        <div className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm
                        transition-all duration-300 ease-in-out
                        hover:bg-neutral-100 hover:-translate-y-1 hover:shadow-md cursor-pointer">
          <h3 className="font-semibold text-xl text-neutral-900">
            💼 Feature Engineer Intern - ConviSaaS Inc
          </h3>

          <Paragraph className="mt-4 text-neutral-600 leading-relaxed">
            Delivered <span className="font-semibold">3+</span> production-ready features 
            by owning end-to-end full-stack development from prototyping to 
            backend API integration, improving product usability and stability.
          </Paragraph>
        </div>

        {/* Amazon ML */}
        <div className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm
                        transition-all duration-300 ease-in-out
                        hover:bg-neutral-100 hover:-translate-y-1 hover:shadow-md cursor-pointer">
          <h3 className="font-semibold text-xl text-neutral-900">
            🤖 Amazon ML Summer School
          </h3>

          <Paragraph className="mt-4 text-neutral-600 leading-relaxed">
            Selected among <span className="font-semibold">65,000+</span> applicants
            for Amazon’s prestigious Machine Learning Summer School,
            demonstrating strong foundations in Machine Learning and Generative AI.
          </Paragraph>
        </div>

        {/* TVS Credit */}
        <div className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm
                        transition-all duration-300 ease-in-out
                        hover:bg-neutral-100 hover:-translate-y-1 hover:shadow-md cursor-pointer">
          <h3 className="font-semibold text-xl text-neutral-900">
            🏅 TVS Credit E.P.I.C 7.0 - IT Challenge
          </h3>

          <Paragraph className="mt-4 text-neutral-600 leading-relaxed">
            Pre-Finalist among <span className="font-semibold">61,000+</span> candidates
            (Top <span className="font-semibold">0.57%</span>)
            in a national-level IT competition.
          </Paragraph>
        </div>

        {/* DSA */}
        <div className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm
                        transition-all duration-300 ease-in-out
                        hover:bg-neutral-100 hover:-translate-y-1 hover:shadow-md cursor-pointer">
          <h3 className="font-semibold text-xl text-neutral-900">
            💻 DSA & Competitive Programming
          </h3>

          <Paragraph className="mt-4 text-neutral-600 leading-relaxed">
            Solved <span className="font-semibold">400+</span> Data Structures & Algorithms 
            problems across LeetCode and CodeChef, building strong expertise 
            in algorithms and system thinking.
          </Paragraph>

          {/* Centered Premium Buttons */}
          <div className="flex justify-center items-center gap-5 mt-8 flex-wrap">

            <a
              href="https://leetcode.com/u/alkak2528/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-medium rounded-xl 
                         bg-yellow-400 text-black 
                         shadow-sm transition-all duration-300
                         hover:scale-105 hover:shadow-md hover:bg-yellow-300"
            >
              🚀 LeetCode Profile
            </a>

            <a
              href="https://www.codechef.com/users/hey_alka25"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-medium rounded-xl 
                         bg-yellow-400 text-black 
                         shadow-sm transition-all duration-300
                         hover:scale-105 hover:shadow-md hover:bg-blue-600"
            >
              💻 CodeChef Profile
            </a>

          </div>
        </div>

        {/* Leadership */}
        <div className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm
                        transition-all duration-300 ease-in-out
                        hover:bg-neutral-100 hover:-translate-y-1 hover:shadow-md cursor-pointer">
          <h3 className="font-semibold text-xl text-neutral-900">
            👑 Head of Operations - Anveshan
          </h3>

          <Paragraph className="mt-4 text-neutral-600 leading-relaxed">
            Led a <span className="font-semibold">50+</span> member team to organize 
            a <span className="font-semibold">400+</span> participant event, 
            collaborated with <span className="font-semibold">25+</span> colleges, 
            and secured <span className="font-semibold">10+</span> sponsorships 
            through strategic outreach and leadership.
          </Paragraph>
        </div>

      </div>
    </div>
  );
}
