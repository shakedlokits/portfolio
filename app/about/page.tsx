import me from '../assets/me.jpg';
import Image from 'next/image'
import { Header } from '@components/Header';
import { Link } from '@components/Link';

const About = () => {
  return (
    <>
      <Header />
      <p>
        Armed with a triple-major for Computer Science, Education and Visual Communication at the Hebrew University of
        Jerusalem and Bezalel Academy for Arts and Design. I am very interested in utilizing interdisciplinary solutions
        to solve and re-design real world problems.
      </p>
      <br/>
      <p>
        Coming from a difficult social-economic background I quit school early and found great interest in the symbiosis
        between design and engineering for it’s impact on re-designing our education. Constantly looking for better
        information models which could be applied to parametric and generative design solutions.
      </p>
      <br/>
      <p>
        When I’m not obsessing about content generation, you would usually find me sailing somewhere, motorcycling a
        mountain or wondering around looking for something new to eat.
      </p>
      <br/>
      <Link href={'/resume'} className='underline font-bold'>Check out my resume</Link>
      <br/>
      <br/>
      <div className='block'>
        <Image src={me} alt="Picture of the author" width={384} height={512}/>
      </div>
    </>
  );
};

export default About;
