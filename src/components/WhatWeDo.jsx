// import React from "react";
// import styled from "styled-components";
// import { Fade } from "react-awesome-reveal";
// import { FaSolarPanel, FaSeedling, FaTools, FaTractor } from "react-icons/fa";

// const WhatWeDo = () => {
//   return (
//     <Section>
//       <Container>
//         <Fade direction="up" triggerOnce={false}>
//           <Header>
//             <SmallTitle>Our Expertise</SmallTitle>
//             <MainTitle>What We Do</MainTitle>
//             <Description>
//               We deliver integrated solutions across renewable energy,
//               agriculture and engineering to support sustainable development
//               and economic growth.
//             </Description>
//           </Header>
//         </Fade>

//         <Cards>
//           <Fade cascade damping={0.2} triggerOnce={false}>
//             <Card>
//               <IconWrapper>
//                 <FaSolarPanel />
//               </IconWrapper>
//               <CardTitle>Renewable Energy Solutions</CardTitle>
//               <CardText>
//                 Deployment of solar, mini-grid, off-grid, wind and small hydro systems designed to power homes, farms, agro-processing and rural enterprises.
//               </CardText>
//             </Card>

//             <Card>
//               <IconWrapper>
//                 <FaSeedling />
//               </IconWrapper>
//               <CardTitle>Smart Agriculture & Agribusiness.</CardTitle>
//               <CardText>
//               Mechanized farming, Farm Animals and Farm Birds, agro-processing support and climate-smart agricultural practices that increase productivity and food availability.
//               </CardText>
//             </Card>

//             <Card>
//               <IconWrapper>
//                 <FaTools />
//               </IconWrapper>
//               <CardTitle>Engineering & Environmental Services</CardTitle>
//               <CardText>
//                 Project design, environmental and social impact assessment, compliance support and implementation supervision for sustainable infrastructure projects.
//               </CardText>
//             </Card>

//              <Card>
//               <IconWrapper>
//                 <FaTractor />
//               </IconWrapper>
//               <CardTitle>Equipment, Logistics & Technical Support</CardTitle>
//               <CardText>
//                Supply of agricultural machinery, consultancy services, inspection technologies and logistics support for agricultural and energy operations.   </CardText>
//             </Card>
//           </Fade>
//         </Cards>
//       </Container>
//     </Section>
//   );
// };

// export default WhatWeDo;

// /* ================= STYLES ================= */

// const Section = styled.section`
//   padding: 100px 20px;
//   background: #f9fbfd;
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: auto;
// `;

// const Header = styled.div`
//   text-align: center;
//   max-width: 700px;
//   margin: 0 auto 60px;
// `;

// const SmallTitle = styled.p`
//   color: #1b67a8;
//   font-weight: 600;
//   margin-bottom: 10px;
//   text-transform: uppercase;
//   letter-spacing: 1px;
// `;

// const MainTitle = styled.h2`
//   font-size: 36px;
//   margin-bottom: 20px;
//   color: #1b67a8;
// `;

// const Description = styled.p`
//   color: #555;
//   font-size: 16px;
//   line-height: 1.6;
// `;

// const Cards = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 30px;
// `;

// const Card = styled.div`
//   background: #fff;
//   padding: 30px;
//   border-radius: 20px;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-8px);
//     box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
//   }
// `;

// const IconWrapper = styled.div`
//   font-size: 40px;
//   color: #1b67a8;
//   margin-bottom: 20px;
// `;

// const CardTitle = styled.h3`
//   font-size: 20px;
//   margin-bottom: 15px;
//   color: #1b67a8;
// `;

// const CardText = styled.p`
//   font-size: 15px;
//   color: #666;
//   line-height: 1.6;
// `;



import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { FaSolarPanel, FaSeedling, FaTools, FaTractor } from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <Section>
      <Container>
        <Fade direction="up" triggerOnce={false}>
          <Header>
            <SmallTitle>Our Expertise</SmallTitle>
            <MainTitle>What We Do</MainTitle>
            <Description>
              We deliver integrated solutions across renewable energy,
              agriculture and engineering to support sustainable development
              and economic growth.
            </Description>
          </Header>
        </Fade>

        <Cards>
          <Fade cascade damping={0.2} triggerOnce={false}>

            <Card>
              <IconWrapper>
                <FaSolarPanel />
              </IconWrapper>
              <CardTitle>Renewable Energy Solutions</CardTitle>
              <CardText>
                Deployment of solar, mini-grid, off-grid, wind and small hydro
                systems designed to power homes, farms, agro-processing and
                rural enterprises.
              </CardText>
            </Card>

            <Card>
              <IconWrapper>
                <FaSeedling />
              </IconWrapper>
              <CardTitle>Smart Agriculture & Agribusiness</CardTitle>
              <CardText>
                Mechanized farming, farm animals and birds, agro-processing
                support and climate-smart agricultural practices that increase
                productivity and food availability.
              </CardText>
            </Card>

            <Card>
              <IconWrapper>
                <FaTools />
              </IconWrapper>
              <CardTitle>Engineering & Environmental Services</CardTitle>
              <CardText>
                Project design, environmental and social impact assessment,
                compliance support and implementation supervision for
                sustainable infrastructure projects.
              </CardText>
            </Card>

            <Card>
              <IconWrapper>
                <FaTractor />
              </IconWrapper>
              <CardTitle>Equipment, Logistics & Technical Support</CardTitle>
              <CardText>
                Supply of agricultural machinery, consultancy services,
                inspection technologies and logistics support for agricultural
                and energy operations.
              </CardText>
            </Card>

          </Fade>
        </Cards>
      </Container>
    </Section>
  );
};

export default WhatWeDo;

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 110px 20px;

  background:
    radial-gradient(circle at top right, rgba(27,103,168,0.08), transparent 60%),
    radial-gradient(circle at bottom left, rgba(27,103,168,0.06), transparent 60%),
    linear-gradient(135deg, #f9fbfd 0%, #eef4fa 50%, #f9fbfd 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Header = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 70px;
`;

const SmallTitle = styled.p`
  color: #1b67a8;
  font-weight: 600;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const MainTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #1b67a8;

  @media (max-width:768px){
    font-size: 30px;
  }
`;

const Description = styled.p`
  color: #555;
  font-size: 16px;
  line-height: 1.7;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
`;

const Card = styled.div`
  background: rgba(255,255,255,0.75);
  padding: 35px;
  border-radius: 20px;

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border: 1px solid rgba(27,103,168,0.08);

  box-shadow: 0 12px 35px rgba(0,0,0,0.06);

  transition: all 0.35s ease;

  &:hover{
    transform: translateY(-10px);
    box-shadow: 0 20px 45px rgba(27,103,168,0.15);
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 30px;
  color: #1b67a8;

  border-radius: 50%;

  background: rgba(27,103,168,0.1);

  margin-bottom: 22px;

  transition: all 0.3s ease;

  ${Card}:hover &{
    background:#1b67a8;
    color:#fff;
    transform: scale(1.1);
  }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 14px;
  color: #1b67a8;
`;

const CardText = styled.p`
  font-size: 0.9rem;
  color: #333;
  line-height: 1.2;
  font-weight:bold;
`;