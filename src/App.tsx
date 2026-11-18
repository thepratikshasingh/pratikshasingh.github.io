import About from "./components/About";
import Contact from "./components/Contact";
import Experience, { type EducationEntry } from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills, { type SkillGroup } from "./components/Skills";

const education: EducationEntry[] = [
  {
    program: "Master of Business Administration",
    institution: "Rajarshi School of Management and Technology (RSMT), Varanasi",
    focus: "Business Administration and Management, General",
    dates: "September 2026 - May 2028",
    status: "In progress",
  },
  {
    program: "Master of Science",
    institution: "Maharaja Suhel Dev University",
    dates: "August 2022 - May 2024",
    status: "Completed",
  },
  {
    program: "Bachelor of Science",
    institution: "Veer Bahadur Singh Purvanchal University (VBSPU), Jaunpur",
    dates: "July 2019 - April 2022",
    status: "Completed",
  },
];

const studyAreas: SkillGroup[] = [
  {
    title: "Current area of study",
    items: ["Business Administration and Management, General"],
    note: "MBA program at RSMT",
  },
  {
    title: "Academic foundation",
    items: ["Master of Science", "Bachelor of Science"],
    note: "Maharaja Suhel Dev University and VBSPU",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience items={education} />
        <Skills groups={studyAreas} />
        <Contact />
      </main>
    </>
  );
}

export default App;
