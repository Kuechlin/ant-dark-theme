import React from 'react';
import { Button, Card } from 'antd';


export default function Cards() {
    return (
        <div className="row">
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    );
}