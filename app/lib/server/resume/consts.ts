import resume from '@assets/resume.json';
import { ResumeArticleMaps, ResumeFilter } from './types';

export const RESUME_ARTICLE_MAPS = {
  skills: parameters => {
    const stars = { 'Master': '★★★★★', 'Proficient': '★★★★', 'Intermediate': '★★★' };
    return resume.skills
      .map((skill) => ({
        title: skill.name,
        byline: `${stars?.[skill.level as keyof typeof stars] ?? ''} - ${skill.level}`,
      }));
  },
  languages: parameters => {
    return resume.languages
      .map((language) => ({
        title: language.language,
        byline: `${language.fluency}`,
      }));
  },
  work: parameters => {
    return resume.work
      .filter((work) => parameters.filter === ResumeFilter.All || work.type === parameters.filter)
      .map((work) => ({
        title: `${work.position.split(',')?.[0]}, ${work.name}`,
        byline: `${work.location?.split(',')[0] + ', ' ?? ''}${work.startDate} - ${work.endDate}`,
        content: work.highlights,
        url: work.url,
      }));
  },
  education: parameters => {
    return resume.education
      .sort((a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime())
      .map((education) => ({
        title: `${education.studyType}\n${education.area}`,
        byline: `${education.startDate} - ${education.endDate}, ${education.institution}`,
      }));
  },
  awards: parameters => {
    return resume.awards
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map((award) => ({
        title: `${award.title}, ${award.awarder}`,
        byline: `${award.date}`,
      }));
  },
  volunteer: parameters => {
    return resume.volunteer
      .filter((v) => parameters.filter === ResumeFilter.All || v.type === parameters.filter)
      .sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime())
      .map((volunteer) => ({
        title: `${volunteer.position}, ${volunteer.organization}`,
        byline: `${volunteer.startDate} - ${volunteer.endDate}`,
        content: volunteer.highlights,
        url: volunteer.url,
      }));
  },
  projects: parameters => {
    return resume.projects
      .filter((project) => parameters.filter === ResumeFilter.All || project.type === parameters.filter)
      .sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime())
      .map((project) => ({
        title: `${project.name}`,
        byline: `${project.startDate} - ${project.endDate}, ${project.entity}`,
        content: project.highlights,
        url: project.url,
      }));
  },

} as const satisfies ResumeArticleMaps;