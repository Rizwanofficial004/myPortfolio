import React, {useEffect} from "react";
import { Row, Col, Typography, Card } from "antd";
import "./styles/project.less";
import RubberBand from "react-reveal/RubberBand";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import Roll from "react-reveal/Roll";
import Particals from "../components/particals";

import Images from "../assets/images";
const { Title } = Typography;
const { Meta } = Card;

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const style = {
    background: "#e58e10",
    padding: "8px 0",
    height: 300,
  };
  return (
    <div className="projects-main">
      <Particals />
      <Row justify="center" style={{ marginBottom: 20 }}>
        <Col xl={8} lg={10} md={12} sm={16} xs={20}>
          <RubberBand duration={3000}>
            <center>
              <Title>My Projects</Title>
            </center>
          </RubberBand>
        </Col>
      </Row>

      <Row gutter={[100, 50]} justify="center" style={{ marginBottom: 50 }}>
        {[1, 2, 3, 4, 5, 6, 7].map((obj, index) => {
          return (
            <Col
              key={index}
              className="gutter-row"
              justify="center"
              xl={9}
              lg={9}
              md={11}
              sm={13}
              xs={18}
            >
              <Slide bottom cascade>
                <Card
                  hoverable
                  // style={{ height: 300 }}
                  cover={
                    <img height={250} alt="example" src={Images.profile2} />
                  }
                >
                  <Card.Grid style={{ width: "100%" }}>
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card.Grid>
                </Card>
              </Slide>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
