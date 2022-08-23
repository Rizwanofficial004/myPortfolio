import "./App.less";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  PlusOutlined,
  HomeOutlined,
  FundProjectionScreenOutlined,
  ContactsOutlined,
  VideoCameraOutlined,
  CopyOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import {
  Layout,
  Menu,
  Input,
  Button,
  Typography,
  Card,
  Image,
  Breadcrumb,
} from "antd";
import React, { useEffect, useState, useCallback, useRef } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Images from "./assets/images";
const { Header, Sider, Content, Footer } = Layout;
const { Title, Text } = Typography;
const App = () => {
  const [visible, setVisible] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 724px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log("mmmmmmm",container);
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     let a = document.getElementsByTagName("canvas");
  //     a[0].style =
  //       "width: 60% !important;height: 100% !important; pointer-events: none; position: fixed !important; z-index:0 !important; top:0px !important; right:0px !important;";
  //   }, 3000);
  // }, []);

  const collapsedFun = (a) => {
    if (!collapsed) {
      let a = document.getElementsByTagName("canvas");
      a[0].style =
        "width: 60% !important;height: 100% !important; pointer-events: none; position: fixed !important; z-index:0 !important; top:0px !important; right:0px !important;";
    } else {
      let a = document.getElementsByTagName("canvas");
      a[0].style =
        "width: 60% !important;height: 100% !important; pointer-events: none; position: fixed !important; z-index:0 !important; top:0px !important; right:0px !important;";
    }
    setCollapsed(!collapsed);
  };
  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [isMobile]);

  const [collapsed, setCollapsed] = useState(false);

  const gridStyle = {
    width: "100%",
    // textAlign: 'center',
  };
  return (
    <div>
      {/* <Layout style={{ minHeight: "100vh" }}>
        <Sider className="site-layout-background-slider" trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: "Home",
              },
              {
                key: "2",
                icon: <UserOutlined />,
                label: "About",
              },
              {
                key: "3",
                icon: <FundProjectionScreenOutlined />,
                label: "Projects",
              },
              {
                key: "4",
                icon: <ContactsOutlined />,
                label: "Contact",
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background-header"
            style={{
              fontSize: 20,
              padding: "0px 0px 0px 10px",
              
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: (a) => collapsedFun(a),
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <div>
              <div className="title-and-image-main"
                // style={{
                //   minHeight: "200px",
                //   width: "50%",
                //   display: "flex",
                //   justifyContent: "space-between",
                // }}
              >
                <div className="title-div">
                  <Title level={2}>
                    <p>Rizwan Ali</p>
                  </Title>

                  <Title level={4}>Welcome to my Profile</Title>
                </div>
                <div>
                  <div className="main-image">
                    <Image
                      preview={{
                        visible: false,
                      }}
                      width="100%"
                      height="100%"
                      style={{ objectFit: "cover" }}
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
              </div>
              <Title level={2}>
                <div>
                  <Title level={5}>
                    We cover digital solutions for all screen sizes. Web apps,
                    mobile apps, kiosk and desktop apps. From effective
                    designing to intelligent architecture and from efficient
                    coding to robust testing.
                  </Title>
                </div>
              </Title>
            </div>

            <div className="App">
              <Particles
                id="tsparticles"
                width="10%"
                init={particlesInit}
                // loaded={particlesLoaded}
                options={{
                  width: "50%",
                  fpsLimit: 120,
                  interactivity: {
                    events: {
                      onClick: {
                        enable: false,
                        mode: "push",
                      },
                      onHover: {
                        enable: false,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                    modes: {
                      push: {
                        quantity: 4,
                      },
                      repulse: {
                        distance: 100,
                        duration: 0.4,
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#e58e10",
                    },
                    links: {
                      color: "#ffffff",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                      directions: "none",
                      enable: true,
                      outModes: {
                        default: "bounce",
                      },
                      random: false,
                      speed: 0.5,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 800,
                      },
                      value: 200,
                    },
                    opacity: {
                      value: 0.5,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      value: { min: 1, max: 7 },
                    },
                  },
                  detectRetina: true,
                }}
              />
            </div>

            <div className="parentDiv">
              <Button
                type="primary"
                icon={<CopyOutlined />}
                // loading={loadings[1]}
                // onClick={() => enterLoading(1)}
              >
                MY RESUME
              </Button>

              <Button
                type="primary"
                icon={<MessageOutlined />}
                // loading={loadings[1]}
                // onClick={() => enterLoading(1)}
              >
                CONTACT ME
              </Button>
            </div>
          </Content>
        </Layout>
      </Layout> */}
    </div>
  );
};

export default App;
