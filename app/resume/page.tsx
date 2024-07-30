import { Header } from './components/Header';
import resume from '@assets/resume.json';
import { Article } from '@components/Article';
import { CollapsableSection } from './components/CollapsableSection';

// TODO: Add resume type filter option (or AI based)
const RESUME_TYPE = 'Software Engineering';

const SkillsAndLanguages = () => {
  const stars = { 'Master': '★★★★★', 'Proficient': '★★★★', 'Intermediate': '★★★' };
  const skills = resume.skills.map((skill) => ({
    title: skill.name,
    byline: `${stars?.[skill.level as keyof typeof stars] ?? ''} - ${skill.level}`,
  }));
  const languages = resume.languages.map((language) => ({
    title: language.language,
    byline: `${language.fluency}`,
  }));

  return (
    <div className="print:border-3 print:border-black print:p-5 md:border-3 md:border-black md:p-5 md:col-span-2 print:!col-span-2 col-span-6 h-fit">
      <CollapsableSection title="Skills">
        <div className="flex flex-col">
          {skills.map((entry, index) => (
            <Article key={index} {...entry} />
          ))}
        </div>
      </CollapsableSection>
      <CollapsableSection title="Languages">
        <div className="flex flex-col">
          {languages.map((entry, index) => (
            <Article key={index} {...entry} />
          ))}
        </div>
      </CollapsableSection>
    </div>
  );
};

const Experience = () => {
  const experience = resume.work.filter((work) => work.type === RESUME_TYPE).map((work) => ({
    title: `${work.position.split(',')?.[0]}, ${work.name}`,
    byline: `${work.location?.split(',')[0] + ', ' ?? ''}${work.startDate} - ${work.endDate}`,
    content: work.highlights,
    url: work.url,
  }));

  return (
    <div className="md:col-span-4 print:!col-span-4 col-span-6 w-full">
      <CollapsableSection title="Experience">
        <div className="columns-1 md:columns-2 gap-12 columns-rule [column-rule-width:3px] w-full print:!columns-2">
          {experience.map((entry, index) => (
            <Article key={index} {...entry} />
          ))}
        </div>
      </CollapsableSection>
    </div>
  );
};

const Education = () => {
  const education = resume.education.sort((a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime()).map((education) => ({
    title: `${education.studyType}\n${education.area}`,
    byline: `${education.startDate} - ${education.endDate}, ${education.institution}`,
  }));

  return (
    <div className="col-span-6 w-full print:border-3 print:border-black print:p-5 md:border-3 md:border-black md:p-5 h-fit">
      <CollapsableSection title="Education">
        <div className="columns-1 md:columns-2 gap-8 w-full print:columns-2">
          {education.map((entry, index) => (
            <Article key={index} {...entry} />
          ))}
        </div>
      </CollapsableSection>
    </div>
  );
};

const Awards = () => {
  const awards = resume.awards.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((award) => ({
    title: `${award.title}, ${award.awarder}`,
    byline: `${award.date}`
  }));

  return (
    <div className="md:col-span-2 print:!col-span-2 col-span-6 w-full">
      <CollapsableSection title="Awards">
        <div className="w-full">
          {awards.map((entry, index) => (
            <Article key={index} {...entry} />
          ))}
        </div>
      </CollapsableSection>
    </div>
  );
};

const Volunteering = () => {
  const volunteering = resume.volunteer
    .filter((v) => v.type === RESUME_TYPE)
    .sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime()).map((volunteer) => ({
    title: `${volunteer.position}, ${volunteer.organization}`,
    byline: `${volunteer.startDate} - ${volunteer.endDate}`,
    content: volunteer.highlights,
    url: volunteer.url,
  }));

  return (
    <div className="md:col-span-4 print:!col-span-4 col-span-6 w-full">
      <CollapsableSection title="Volunteering">
        <div className="columns-1 md:columns-2 gap-12 columns-rule [column-rule-width:3px] w-full print:columns-2">
          {volunteering.map((entry, index) => (
            <Article key={index} {...entry} />
          ))}
        </div>
      </CollapsableSection>
    </div>
  );
};

const Projects = () => {
  const projects = resume.projects
    .filter((project) => project.type === RESUME_TYPE)
    .sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime())
    .map((project) => ({
      title: `${project.name}`,
      byline: `${project.startDate} - ${project.endDate}, ${project.entity}`,
      content: project.highlights,
      url: project.url,
    }));

  return (
    <div className="col-span-6 w-full print:!hidden">
      <CollapsableSection title="Projects">
        <div
          className="xl:columns-3 columns-1 md:columns-2 gap-12 columns-rule [column-rule-width:3px] w-full print:columns-3">
          {projects.map((entry, index) => (
            <Article key={index} {...entry} />
          ))}
        </div>
      </CollapsableSection>
    </div>
  );
};

const Home = async () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-6 gap-10 ">
        <SkillsAndLanguages />
        <Experience />
        <Education />
        <Awards />
        <Volunteering />
        <div className="col-span-6 w-full print:border-none border-black border-b-6 md:border-b-6 border-none" />
        <Projects />
      </div>
    </>
  );
};



export default Home;
