import { Row, Col, ConfigProvider, Space, Button, Divider } from "antd";
import Card from "antd/es/card/Card";
import { IconMap } from "antd/es/result";
import Link from "antd/es/typography/Link";
import axios from "axios";
import { config } from "process";
import React, { useState } from "react";
// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

const fs = require("fs");
let gridStyle = { width: "25%", textAlign: "center" };

let CameraView = (config) => <Card.Grid style={gridStyle}>cAMERA</Card.Grid>;

let CardGridL = (data) => (
  <Card title="Card Title">
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      Content
    </Card.Grid>
    <CameraView />
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
  </Card>
);

export default function App() {
  const [stream, setStream] = useState();
  let routers = fs.readFileSync("./routers.csv");
  console.log();
  let routersL = routers.toString().split("\n");
  let aitem = (data: any, key: number) => <Card key={key} {...data} />;
  let ra = routersL.map((i, k) => {
    let t = i.split(",");

    let vs = t.map((ti, tk) => <span key={tk}>{ti}</span>);
    console.log(t);
    return (
      <Col span={12} key={k}>
        <Card
          span={4}
          title={t[0]}
          // children={i.toString().split(",").join("\n")}
          children={
            <>
              <canvas style={{ width: 300, height: 300 }} />
              <Link href={t[2]}>router</Link>
            </>
          }
          extra={t[1]}
        />
      </Col>
    );
  });

  return (
    <ConfigProvider theme={"dark"}>
      <CardGridL />
      <Divider type={"horizontal"} title="VZ" />
      <Row
        justify={"space-around"}
        // align={"middle"}
        placeholder={1}
      >
        {ra}
      </Row>
    </ConfigProvider>
  );
}
