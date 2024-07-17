'use client';

import { Title } from '@components/Title';
import { Menu } from '@components/Menu';
import resume from '@assets/resume.json';
import { Link } from '@components/Link';
import { format } from 'date-fns';

export const Header = () => {
  const onPrint = () => {
    if (navigator.vendor.includes('Apple')) {
      alert(`
I'm so sorry! Safari didn't fix this bug for 17 years... 
(https://bugs.webkit.org/show_bug.cgi?id=15546) 
Please use literally any other browser to print this page.
      `);
    } else {
      window?.print();
    }
  };

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
          <p className="underline font-bold highlight cursor-pointer inline print:hidden"
             onClick={onPrint}>Print 🖨️</p>
          <p className="hidden print:inline font-bold">Generated
            on {format(new Date(), 'MMMM do, yyyy')} at {new URL(resume.basics.url).hostname.slice(4)}/resume</p>
        </Menu.PrimaryRow>
        <Menu.SecondaryRow className="sm:flex hidden print:!hidden">
          <Link href={'#skills'}>Skills</Link>
          <Link href={'#experience'}>Experience</Link>
          <Link href={'#education'}>Education</Link>
          <Link href={'#volunteering'}>Volunteering</Link>
          <Link href={'#awards'}>Awards</Link>
          <Link href={'#projects'}>Projects</Link>
        </Menu.SecondaryRow>
      </Menu>
    </>
  );
};