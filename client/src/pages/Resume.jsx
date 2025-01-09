import React from "react";

const Button = ({ label, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 text-white rounded-full shadow hover:btn-gradient/80 transition duration-300 ${className}`}
  >
    {label}
  </button>
);

// Header Section with Download Button
const Header = () => (
  <div className="flex flex-col justify-between items-start lg:items-center mb-12 space-y-6 lg:space-y-0">
    <div>
      <h1 className="text-5xl font-extrabold text-gradient">Henok Assefa</h1>
      <h2 className="text-xl text-gray-500 mt-2 dark:text-gray-200">
        Full Stack Developer/ UI/UX Designer
      </h2>
      <p className="mt-4 text-gray-600 dark:text-gray-200">
        I am a passionate software engineer with over 10 years of experience in
        web development, building scalable software solutions. I have worked
        with diverse teams, managed projects from concept to completion, and
        continuously strive to learn and adapt to new technologies.
      </p>
    </div>
  </div>
);

// Work Experience Component
const WorkExperience = () => (
  <div className="mb-12">
    <SectionHeading title="Work Experiences" />
    <div className="space-y-8">
      <ExperienceItem
        title="Senior Software Engineer"
        company="Tria Trading PLC"
        duration="2023 - 2024"
        description="Led a team of engineers to build cloud-native applications. Worked on large-scale projects that serve millions of users globally."
        points={[
          "Developed scalable microservices using Node.js and Kubernetes.",
          "Collaborated with cross-functional teams to design solutions.",
          "Enhanced application performance by 20% using modern optimization techniques.",
        ]}
      />
      <ExperienceItem
        title="Lead Software Developer"
        company="Ozon Technology"
        duration="2023 - present"
        description="Worked on iOS applications, contributing to several successful app launches."
        points={[
          "Led the frontend team for key product features.",
          "Mentored junior developers and performed code reviews.",
          "Contributed to major app performance improvements.",
        ]}
      />
    </div>
  </div>
);

// Experience Item Component (Reusable)
const ExperienceItem = ({ title, company, duration, description, points }) => (
  <div>
    <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
      {title} - {company}
    </h4>
    <p className="text-sm text-gray-500 dark:text-gray-200">{duration}</p>
    <p className="mt-2 text-gray-600 dark:text-gray-200">{description}</p>
    <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-600 dark:text-gray-200">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

// Skills Component
const Skills = () => (
  <div className="mb-12">
    <SectionHeading title="Skills" />
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
      <SkillCategory
        title="Technical"
        skills={[
          "JavaScript",
          "React",
          "Tailwind",
          "Node.js",
          "Python",
          "Next.js",
          "ReactNative",
          "Figma",
        ]}
      />
      <SkillCategory
        title="Professional"
        skills={[
          "Team Leadership",
          "Effective Communication",
          "Time Management",
        ]}
      />
      <SkillCategory
        title="Tools"
        skills={["Git", "Docker", "Jenkins", "AWS", "Githab", "Vercel"]}
      />
    </div>
  </div>
);

// Skill Category Component
const SkillCategory = ({ title, skills }) => (
  <div>
    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
      {title}
    </h4>
    <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600 dark:text-gray-200">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

// Education Component
const Education = () => (
  <div className="mb-12">
    <SectionHeading title="Education" />
    <div className="space-y-6">
      <EducationItem
        title="Bsc in Computer Science"
        institution="Adama Science And Technlogy University"
        duration="2021 - present"
      />
      <EducationItem
        title="Data Structures and Algorithms"
        institution="A2SV Community Education"
        duration="2022 - persent"
      />
    </div>
  </div>
);

// Education Item Component
const EducationItem = ({ title, institution, duration }) => (
  <div>
    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
      {title}
    </h4>
    <p className="text-sm text-gray-500 dark:text-gray-200">{institution}</p>
    <p className="text-sm text-gray-500 dark:text-gray-200">{duration}</p>
  </div>
);

// Reusable Section Heading Component
const SectionHeading = ({ title }) => (
  <h3 className="text-2xl font-bold text-gradient mb-6">{title}</h3>
);

// Main Component
const ResumeRightSide = () => {
  // Handle PDF Download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Path to your resume PDF
    link.download = "Henok_Assefa_Resume.pdf"; // Optional: Set the filename for download
    link.click(); // Trigger the download
  };

  return (
    <div>
      <div className="mb-20 flex my-16 md:my-24 flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold text-gradient text-center ">
          Online Resume
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-200 py-5 w-[80%] text-center">
          I am a passionate software engineer with over 10 years of experience
          in web development, building scalable software solutions. I have
          worked with diverse teams, managed projects from concept to
          completion, and continuously strive to learn and adapt to new
          technologies.
        </p>

        <Button
          label="Download PDF Version"
          onClick={handleDownload}
          className="lg:ml-6 w-72 btn-gradient "
        />
      </div>

      <div className="container mx-auto p-8  shadow-lg shadow-cyan-600/20 border border-cyan-600/20 rounded-lg my-20">
        <Header />
        <WorkExperience />
        <Skills />
        <Education />
      </div>
    </div>
  );
};

export default ResumeRightSide;
