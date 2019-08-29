import React from 'react';
import { Descriptions } from 'antd';

export default function DescriptionTest() {
    return (
        <div className="row">
            <Descriptions column={2} bordered size="middle">
                <Descriptions.Item label="Test">
                    Test
                </Descriptions.Item>
                <Descriptions.Item label="Hello">
                    World
                </Descriptions.Item>
                <Descriptions.Item label="Test">
                    Test
                </Descriptions.Item>
                <Descriptions.Item label="Hello">
                    World
                </Descriptions.Item>
            </Descriptions>
        </div>
    );
}