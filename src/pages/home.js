import React, { useState, useEffect } from "react";
import { CopyOutlined, MessageOutlined } from "@ant-design/icons";
import { Button, Typography, Image } from "antd";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import "./styles/home.less";


import Images from "./../assets/images";
import Particals from "../components/particals";
import ModalFun from "./../components/modal";
const { Title } = Typography;

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [modal1Visible, setModal1Visible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Particals />
      <div>
        <div className="title-and-image-main">
          <div className="title-div">
            <Zoom duration={5000} mirror={true} top>
              <Title level={1}>
                <div className="name-title">
                  <p>Rizwan Ali</p>
                </div>
              </Title>
            </Zoom>
            <Fade duration={2000} distance="1000px" mirror={true} left>
              <Title level={3}>Welcome to my Profile</Title>
            </Fade>
          </div>
          <div className="main-image">
            <Image
              preview={{
                visible: false,
              }}
              width="100%"
              height="100%"
              style={{ objectFit: "cover", borderRadius: "100%" }}
              src={Images.profile}
              onClick={() => setVisible(true)}
            />
          </div>
          <div
            style={{
              display: "none",
            }}
          >
            <Image.PreviewGroup
              preview={{
                visible,
                onVisibleChange: (vis) => setVisible(vis),
              }}
            >
              <Image src={Images.profile2} />
              <Image src={Images.profile} />
              <Image src={Images.profile2} />
            </Image.PreviewGroup>
          </div>
        </div>

        <div>
          <div>
            <Title level={5}>
              We cover digital solutions for all screen sizes. Web apps, mobile
              apps, kiosk and desktop apps. From effective designing to
              intelligent architecture and from efficient coding to robust
              testing.
            </Title>
          </div>

          <div className="button-parentDiv">
            <a href={require("./../assets/Resume.pdf")} target="_self">
              <Button
                type="primary"
                icon={<CopyOutlined />}
                // onClick={() => navigate('resume')}
              >
                MY RESUME
              </Button>
            </a>

            <Button
              type="primary"
              icon={<MessageOutlined />}
              onClick={() => setModal1Visible(true)}
            >
              CONTACT ME
            </Button>
          </div>
        </div>
      </div>
      <ModalFun
        modal1Visible={modal1Visible}
        setModal1Visible={setModal1Visible}
      />
    </div>
  );
}
