import Sources from '../components/Sources/Sources';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
       <Section grid> 
        <Hero />
         <BgAnimation /> 
       </Section> 
      <Projects />
      <br/>
      <br/>
      <Technologies />
      <Timeline />
      <Sources />
    </Layout>
  );
};

export default Home;