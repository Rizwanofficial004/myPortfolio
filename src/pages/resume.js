import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import MyResume from "./../assets/Resume.pdf";
import { Button, Row, Col, Typography } from "antd";
import { CopyOutlined, MessageOutlined } from "@ant-design/icons";

import "./styles/resume.less";
const { Title } = Typography;
export default function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  /*To Prevent right click on screen*/
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  /*When document gets loaded successfully*/
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <div className="main">
        <Row justify="center">
          <Col
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Button type="primary" htmlType="Download">
              Download
            </Button>
          </Col>
        </Row>

        {/* <Row justify="center"> */}
        {/* <Col style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}> */}
        <center style={{marginTop: 10}}>
          <Document
            className="document"
            file={MyResume}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </center>
        {/* </Col> */}
        {/* </Row> */}

        <Row justify="center" style={{paddingLeft: 100, paddingRight: 100}}>
          <Col xl={6} lg={6}>
            <Title level={3}>
              Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </Title>
          </Col>
          <Col xl={6} lg={6}>
            <div className="button-parentDiv">
              <Button
                type="primary"
                icon={<CopyOutlined />}
                disabled={pageNumber <= 1}
                onClick={previousPage}
                className="Pre"
              >
                Previous
              </Button>

              <Button
                type="primary"
                icon={<MessageOutlined />}
                disabled={pageNumber >= numPages}
                onClick={nextPage}
              >
                Next
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
