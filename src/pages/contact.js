import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, Row, Col, Typography } from "antd";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import "./styles/contact.less";
const { Title } = Typography;
const { TextArea } = Input;
export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Row justify="center">
        <Col xl={8} lg={10} md={12} sm={16} xs={20}>
          <RubberBand duration={3000}>
            <center>
              <Title>Get in touch with me!</Title>
            </center>
          </RubberBand>
        </Col>
      </Row>
      <Row justify="center">
        <Col xl={10} lg={10}>
          <center
            style={{
              //   marginLeft: "200px",
              //   marginRight: "200px",
              marginBottom: "40px",
            }}
          >
            <Slide top cascade>
              <div className="content-dis">
                <p>
                  Email me with any questions or inqueries or call{" "}
                  <span style={{ color: "#e58e10", fontSize: "1.1rem" }}>
                    {" "}
                    +92 304 1493401.{" "}
                  </span>{" "}
                  I would be happy to answer your questions and set up a
                  meeting with you. I always love to hear from you.
                </p>
              </div>
            </Slide>
          </center>
        </Col>
      </Row>
      <Fade bottom cascade>
        <Row justify="center">
          <Col xl={10} lg={10} md={12} sm={18} xs={22}>
            <Form
              name="basic"
              // labelCol={{
              //   span: 8,
              // }}
              // wrapperCol={{
              //   span: 16,
              // }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                //   label="FullName"
                name="FullName"
                rules={[
                  {
                    //   required: true,
                    message: "Please input your FullName!",
                  },
                ]}
              >
                <Input placeholder="Your Name" />
              </Form.Item>

              <Form.Item
                //    label="E-Mail"
                name="E-Mail"
                rules={[
                  {
                    required: true,
                    message: "Please input your E-Mail!",
                  },
                ]}
              >
                <Input type="email" placeholder="E-mail" />
              </Form.Item>

              <Form.Item
              // label="TextArea"
              >
                <TextArea placeholder="Let me know uour queries" rows={6} />
              </Form.Item>

              <Form.Item
              //   wrapperCol={{
              //     offset: 8,
              //     span: 16,
              //   }}
              >

                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Fade>
    </>
  );
}
