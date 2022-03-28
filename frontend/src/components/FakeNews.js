import React, { useState } from 'react';

import 'antd/dist/antd.css';

import { Input, Select, Row, Col, Button } from 'antd';

const { TextArea } = Input;

export const FakeNews = () => {

    const [ inputText, setInputText ] = useState("");
    const [ output, setOutput ] = useState("");

    const check = () => {
        console.log(inputText);
        // fetch('http://e6a4-35-221-218-113.ngrok.io', { 
        //   method: 'POST',
        //   headers: {
        //   },
        //   body: { input: inputText }
        // }).then(response =>  response.json())
        // .then(resData => { 
        //     setOutput(resData.predictions)
        // }
        // ).catch(
        //   error => console.log(error)
        // );
      };

    const handleTextChange = (event) => {
        setInputText(event.target.value);
    }

    return (
        <div>
            <Row gutter={24}>
                <Col span={12}>
                    <img style={{ height:"100vh", width: "57vw" }} src={require('../images/fake.jpeg')} />
                </Col>
                <Col span={2}></Col>
                <Col span={10}>
                    <div style={{ marginTop: "15%" }}>
                    <p style={{ fontSize: "20pt", color: "#CD5465", alignContent: "center", marginLeft: "25%"}}>Fake News Detection</p>
                    <div style={{ marginTop: '10%' }}>
                    <TextArea maxLength={100} style={{ height: 400, width: 550, border: '2px solid #CD5465'  }} value={inputText} onChange={handleTextChange}/>
                    <Button type="primary" shape="round" style={{ width: "30%", marginLeft: "35%", marginTop: "5%", height: "15%", backgroundColor: !!!inputText? "#B1B1B1": "#CD5465", border: !!!inputText? "" : "1px solid #CD5465" }} onClick={check} disabled={!!!inputText}>
                        Check
                    </Button>
                    </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}