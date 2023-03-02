import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

// import axios from "axios";

import { api } from "./api";

import { Input, Form, Row, Col, Button, FormItem, AutoComplete } from "antd";
import Card from "antd/es/card/Card";
import ConfigProvider, { ConfigConsumer } from "antd/es/config-provider";

const root = createRoot(document.getElementById("root"));

let s = require("./suggest");
let TextInput = (item, key) => (
  <Form.Item
    key={key}
    label={item.label}
    children={<Input defaultValue={item.value} name={key} {...item.config} />}
  />
);

let FormItemMap = (data) => {
  Object.values(data).map((item, key) => <TextInput key={key} {...item} />);
};

let { connect } = require("socket.io-client");
// api.get("tasks");
// let ss = connect("ws://api.vapezone.pro");

root.render(
  <>
    <ConfigProvider>
      <Row>
        <Card title={1} hoverable color={"success"} bordered children={"1"} />
        <App />
      </Row>
    </ConfigProvider>
  </>
);

/*
const onvif = require('node-onvif');
 
// Create an OnvifDevice object
let device = new onvif.OnvifDevice({
  xaddr: 'http://192.168.10.14:10080/onvif/device_service',
  user : 'admin',
  pass : '123456'
});
 
// Initialize the OnvifDevice object
device.init().then(() => {
  // Get the UDP stream URL
  let url = device.getUdpStreamUrl();
  console.log(url);
}).catch((error) => {
  console.error(error);
});

*/
