import React, { useState } from 'react';

import 'antd/dist/antd.css';

import { Input, Select, Row, Col, Button } from 'antd';

const { TextArea } = Input;

// open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security

export const FakeNews = () => {

    const [inputText, setInputText] = useState("");
    const [output, setOutput] = useState("");

    const check = () => {
        fetch('http://7994-34-125-236-23.ngrok.io', { 
          method: 'POST',
        //   mode: 'cors',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify({ "input": inputText })
        }).then(response => response.json())
        .then(resData => {
            setOutput(resData.predictions)
        }).catch(error => console.log(error))
    };

    const handleTextChange = (event) => {
        setInputText(event.target.value);
    }

    console.log(output)

    return (
        <div>
            <Row gutter={24}>
                <Col span={12}>
                    <img style={{ height: "100vh", width: "57vw" }} src={require('../images/fake.jpeg')} />
                </Col>
                <Col span={2}></Col>
                <Col span={10}>
                    <div style={{ marginTop: "15%" }}>
                        <p style={{ fontSize: "20pt", color: "#CD5465", alignContent: "center", marginLeft: "25%" }}>Fake News Detection</p>
                        <div style={{ marginTop: '10%' }}>
                            <TextArea maxLength={100} style={{ height: 400, width: 550, border: '2px solid #CD5465' }} value={inputText} onChange={handleTextChange} />
                            <Button type="primary" shape="round" style={{ width: "30%", marginLeft: "35%", marginTop: "5%", height: "20%", backgroundColor: !!!inputText ? "#B1B1B1" : "#CD5465", border: !!!inputText ? "" : "1px solid #CD5465" }} onClick={check} disabled={!!!inputText}>
                                Check
                            </Button>
                        </div>
                    </div>
                    {!!output && output == "1" &&
                        <p>The input text is real</p>
                    }
                    {!!output && output == "0" &&
                        <p>The input text is fake</p>
                    }
                </Col>
            </Row>
        </div>
    )
}