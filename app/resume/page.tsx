import { Header } from './components/Header';
import { ReactNode } from 'react';
import { classy } from '@lib/utilities';
import resume from '@assets/resume.json';
import { Article } from '@components/Article';

const RESUME_TYPE = 'Software Engineering';

const CollapsableSection = ({ title, children, className }: {
  title: string,
  children: ReactNode,
  className?: string
}) => {
  return (
    <div className={classy('flex flex-col gap-1 w-full mb-3', className)} id={title.toLowerCase().replaceAll(' ', '-')}>
      <h1 className="text-3xl italic font-bold leading-tight uppercase text-stroke pb-3">{title}</h1>
      {children}
    </div>
  );
};

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
    <div className="border-3 border-black p-5 col-span-2 h-fit">
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
    title: `${work.position}, ${work.name}`,
    byline: `${work.location?.split(',')[0] + ', ' ?? ''}${work.startDate} - ${work.endDate}`,
    content: work.highlights?.map((highlight) => '• ' + highlight).join('\n'),
    url: work.url,
  }));

  return (
    <div className="col-span-4 w-full">
      <CollapsableSection title="Experience">
        <div className="columns-2 gap-8 w-full">
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
    <div className="col-span-6 w-full border-3 border-black p-5 h-fit">
      <CollapsableSection title="Education">
        <div className="grid grid-cols-2 gap-8 w-full">
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
    byline: `${award.date}`,
    content: award.summary,
  }));

  return (
    <div className="col-span-2 w-full">
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
  const volunteering = resume.volunteer.sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime()).map((volunteer) => ({
    title: `${volunteer.position}, ${volunteer.organization}`,
    byline: `${volunteer.startDate} - ${volunteer.endDate}`,
    content: volunteer.highlights.map((highlight) => '• ' + highlight).join('\n'),
    url: volunteer.url,
  }));

  return (
    <div className="col-span-4 w-full">
      <CollapsableSection title="Volunteering">
        <div className="columns-1 md:columns-2 gap-12 columns-rule [column-rule-width:3px] w-full">
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
      title: `${project.name}, ${project.entity}`,
      byline: `${project.startDate} - ${project.endDate}`,
      content: `${project.description}\n\n${project.highlights.map((highlight) => '• ' + highlight).join('\n')}`,
      url: project.url,
    }));

  return (
    <div className="col-span-6 w-full">
      <CollapsableSection title="Projects">
        <div className="xl:columns-3 columns-1 md:columns-2 gap-12 columns-rule [column-rule-width:3px] w-full">
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
      <div className="grid grid-cols-6 gap-10">
        <SkillsAndLanguages />
        <Experience />
        <Education />
        <Awards />
        <Volunteering />
        <div className="col-span-6 w-full h-1.5 bg-black" />
        <Projects />
      </div>
    </>
  );
};

export default Home;
