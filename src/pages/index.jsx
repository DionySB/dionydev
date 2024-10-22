// pages/index.js
import { GoAlertFill } from "react-icons/go";
import { Container, Content, Infos, Function, Intro, LinkProjects } from '../../styles/index';
import Link from 'next/link';
import Terminal from '../../components/Terminal/index';
// import Whatsapp from '../../components/Whatsapp/index';

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Function>Systems Developer</Function>
          <Intro>
            Computer Scientist | 2 years of experience in development, specializing in PHP, Laravel & NodeJs. Skilled in REST APIs and AWS services, with a background in e-commerce and exchange platforms.
          </Intro>
          {/* <Link href="projects">
            <LinkProjects>Jobs <GoAlertFill /></LinkProjects>
          </Link> */}
        </Infos>
        <Terminal />
      </Content>
      {/* <Whatsapp /> */}
    </Container>
  );
}

