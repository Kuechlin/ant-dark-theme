import React from 'react';
import { Alert } from 'antd';

export default function Alerts() {
    return (
        <div className="row">
            <Alert message="Success Tips" type="success" showIcon />
            <Alert message="Informational Notes" type="info" showIcon />
            <Alert message="Warning" type="warning" showIcon />
            <Alert message="Error" type="error" showIcon />
        </div>
    );
}