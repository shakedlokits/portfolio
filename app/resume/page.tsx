'use server';

import { Header } from './components/Header';
import { Section } from './components/Section';
import { Grid } from './components/Grid';
import { getResumeArticles, ResumeFilter } from '@lib/server';

// TODO: Add resume type filter option (or AI based)
const RESUME_TYPE = ResumeFilter.SoftwareEngineering;

const Home = async () => {
  const skills = getResumeArticles('skills', RESUME_TYPE);
  const languages = getResumeArticles('languages', RESUME_TYPE);
  const experience = getResumeArticles('work', RESUME_TYPE);
  const education = getResumeArticles('education', RESUME_TYPE);
  const awards = getResumeArticles('awards', RESUME_TYPE);
  const volunteering = getResumeArticles('volunteer', RESUME_TYPE);
  const projects = getResumeArticles('projects', RESUME_TYPE);

  return (
    <>
      <Header />
      <Grid>
        <Grid.GridItem itemSettings={{ numberOfColumns: 2, hasBorder: true, hideInPrint: false }}>
          <Section
            title="Skills"
            articles={skills}
            columnSettings={{ numberOfColumns: 1, hasColumnRule: true }}
          />
          <Section
            title="Languages"
            articles={languages}
            columnSettings={{ numberOfColumns: 1, hasColumnRule: true }}
          />
        </Grid.GridItem>
        <Grid.GridItem itemSettings={{ numberOfColumns: 4, hasBorder: false, hideInPrint: false }}>
          <Section
            title="Experience"
            articles={experience}
            columnSettings={{ numberOfColumns: 2, hasColumnRule: true }}
          />
        </Grid.GridItem>
        <Grid.GridItem itemSettings={{ numberOfColumns: 6, hasBorder: true, hideInPrint: false }}>
          <Section
            title="Education"
            articles={education}
            columnSettings={{ numberOfColumns: 2, hasColumnRule: false }}
          />
        </Grid.GridItem>
        <Grid.GridItem itemSettings={{ numberOfColumns: 2, hasBorder: false, hideInPrint: false }}>
          <Section
            title="Awards"
            articles={awards}
            columnSettings={{ numberOfColumns: 1, hasColumnRule: true }}
          />
        </Grid.GridItem>
        <Grid.GridItem itemSettings={{ numberOfColumns: 4, hasBorder: false, hideInPrint: false }}>
          <Section
            title="Volunteering"
            articles={volunteering}
            columnSettings={{ numberOfColumns: 2, hasColumnRule: true }}
          />
        </Grid.GridItem>
        <Grid.Separator />
        <Grid.GridItem itemSettings={{ numberOfColumns: 6, hasBorder: false, hideInPrint: true }}>
          <Section
            title="Projects"
            articles={projects}
            columnSettings={{ numberOfColumns: 3, hasColumnRule: true }}
          />
        </Grid.GridItem>
      </Grid>
    </>
  );
};

export default Home;
