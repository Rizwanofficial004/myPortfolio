import React, { useState, useEffect } from "react";
import "./styles/layouts.less";
import {
  UserOutlined,
  HomeOutlined,
  FundProjectionScreenOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import Navigation from "../navigation";

const { Header, Content, Footer } = Layout;

export default function Layouts() {
  let key = JSON.parse(localStorage.getItem("selectedKey"));
  const [selectedKey, setSelectedKey] = useState(key ? key : ["1"]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: <Link to="/about">About</Link>,
    },
    {
      key: "3",
      icon: <FundProjectionScreenOutlined />,
      label: <Link to="/projects">Projects</Link>,
    },
    {
      key: "4",
      icon: <ContactsOutlined />,
      label: <Link to="/contact">Contact</Link>,
    },
  ];
  const clickLink = (obj) => {
    setSelectedKey(obj.keyPath);
    localStorage.setItem("selectedKey", JSON.stringify(obj.keyPath));
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header-style">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={selectedKey}
          items={items}
          onClick={(obj) => clickLink(obj)}
        />
      </Header>

      <Content className="content-style">
        <Navigation />
      </Content>

      <Footer style={{ textAlign: "center", backgroundColor: "#171813" }}>
        2022 © Copyrights Rizwanofficial009@gmail.com - All rights reserved
      </Footer>
    </Layout>
  );
}

//   ************** create array with dumy values
// items={new Array(3).fill(null).map((_, index) => ({
//   key: String(index + 1),
//   label: `nav ${index + 1}`,
// }))}
