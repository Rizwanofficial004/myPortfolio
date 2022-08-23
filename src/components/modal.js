import React, { useState } from "react";
import { Button, Modal, Form, Input, Row, Col, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import RubberBand from "react-reveal/RubberBand";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
// import "./styles/contact.less";
import './styles/modal.less'
const { Title } = Typography;
const { TextArea } = Input;
export default function ModalFun({ modal1Visible, setModal1Visible }) {
  
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title="Reques a Quote"
      closeIcon={<CloseOutlined  style={{color:'red'}} />}
      style={{
        top: 20,
      }}
      visible={modal1Visible}
      // onOk={() => setModal1Visible(false)}
      onCancel={() => setModal1Visible(false)}
    >
      <Fade bottom cascade>
        <Row justify="center">
          <Col xl={20} lg={20} md={20} sm={20} xs={22}>
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
                {/* <div className="button-parentDiv">
                <Button
                  type="primary"
                  //   icon={<MessageOutlined />}
                  // loading={loadings[1]}
                  // onClick={() => enterLoading(1)}
                >
                  CONTACT ME
                </Button>
              </div> */}
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Fade>
    </Modal>
  );
}
