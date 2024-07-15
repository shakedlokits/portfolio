'use client';

import { Title } from '@components/Title';
import { Menu } from '@components/Menu';
import resume from '@assets/resume.json';
import { Link } from '@components/Link';
import { format } from 'date-fns';

export const Header = () => {
  return (
    <>
      <Title>
        <Title.TitleBody>
          <span className="inline">Hi! I’m Shaked Lokits,</span>
          <br />
          <span>A&nbsp;</span>
          <span className="highlight underline">
            Software Engineer|
          </span>
        </Title.TitleBody>
      </Title>
      <Menu>
        <Menu.PrimaryRow>
          <div>
            <p className="inline">{resume.basics.location.city}, {resume.basics.location.countryCode}</p>
            <p className="sm:inline hidden">, {resume.basics.email}</p>
          </div>
          <p className="underline font-bold highlight cursor-pointer inline print:hidden" onClick={() => window?.print()}>Print 🖨️</p>
          <p className="hidden print:inline font-bold">Printed on {format(new Date(), 'MMMM do, yyyy')} at {new URL(resume.basics.url).hostname.slice(4)}/resume</p>
        </Menu.PrimaryRow>
        <Menu.SecondaryRow className="sm:flex hidden print:!hidden">
          <Link href={'#skills'} >Skills</Link>
          <Link href={'#experience'} >Experience</Link>
          <Link href={'#education'} >Education</Link>
          <Link href={'#volunteering'} >Volunteering</Link>
          <Link href={'#awards'} >Awards</Link>
          <Link href={'#projects'} >Projects</Link>
        </Menu.SecondaryRow>
      </Menu>
    </>
  );
};