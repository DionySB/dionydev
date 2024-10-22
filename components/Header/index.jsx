import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, Title, NavLinks, Ancora, Content, Menu, CloseSidebar, ContentTitle, SubTitle } from './styled';

export default function Header() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const closeSidebar = () => setSidebar(false);

    return (
        <Container>
            <Content>
                <ContentTitle>
                    <Title>Diony Santos</Title>
                    <SubTitle>Developer</SubTitle>
                </ContentTitle>

                <Menu onClick={showSidebar}>
                    <FaBars />
                </Menu>

                <NavLinks sidebar={sidebar}>
                    <CloseSidebar onClick={showSidebar}>
                        <FaTimes />
                    </CloseSidebar>

                    <Link href="https://github.com/DionySB/">
                        <Ancora onClick={closeSidebar}>
                            GitHub <FaGithub className="translucent-icon" />
                        </Ancora>
                    </Link>

                    <Link href="https://www.linkedin.com/in/diony-santos-3234a71a7/">
                        <Ancora onClick={closeSidebar}>
                            LinkedIn <FaLinkedin className="translucent-icon" />
                        </Ancora>
                    </Link>
                </NavLinks>
            </Content>
        </Container>
    );
}
