import React, {useEffect} from "react";
import { Row, Col, Typography, Card } from "antd";
import RubberBand from "react-reveal/RubberBand";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";

import "./styles/about.less";
const { Title } = Typography;
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const skills = [
    { name: "JavaScript" },
    { name: "React Js" },
    { name: "React Native" },
    { name: "Native Base" },
    { name: "Node Js" },
    { name: "Express Js" },
    { name: "Mongo DB" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Bootstrap" },
    { name: "Ant-D" },
    { name: "Material UI" },
  ];

  return (
    <div className="about-main">
      <Row justify="center">
        <Col xl={8} lg={10} md={12} sm={16} xs={20}>
          <RubberBand duration={3000}>
            <center>
              <Title>About Me</Title>
            </center>
          </RubberBand>
        </Col>
      </Row>
      <Row justify="center">
        <Col xl={18} lg={18} md={18} sm={28} xs={24}>
          <Slide top cascade>
            <p>
              Devorbis is one of the younger initiatives in digital world. Based
              in Pakistan with the focus of empowering you with power solutions
              using modern techniques. Keeping ourselves updated with modern
              approaches, new designs and solutions to tackle new age problems
              for you. We are powered by very energetic and passionate group of
              Millennials. We are continuously evolving our processes, thinking
              and research to become the absolute best. Our mission is to join
              you in your initiatives and covert your exciting Ideas into
              Reality.
            </p>
          </Slide>
        </Col>
      </Row>

      <Row justify="center">
        <Col xl={24} lg={24} md={10} sm={16} xs={20}>
          <center>
            <Title className="about-title">
              <Slide right>
                <p>Here is my skills</p>
              </Slide>
            </Title>
          </center>
          {/* <Card.Grid style={gridStyle}>Here Is My Skills</Card.Grid> */}
        </Col>
      </Row>

      <center>
        <Row justify="center" gutter={[30, 40]} style={{ width: "80%" }}>
          {skills.map((obj, index) => {
            return (
              <Col key={index} xl={6} lg={6} md={10} sm={12} xs={22}>
                <Roll cascade>
                  <Card.Grid style={{ minHeight: "100px" }}>
                    {obj.name}
                  </Card.Grid>
                </Roll>
              </Col>
            );
          })}
        </Row>
      </center>
    </div>
  );
}
