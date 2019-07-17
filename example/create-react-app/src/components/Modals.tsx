import React from 'react';
import { Button } from 'antd/lib/radio';
import { Modal } from 'antd';

function confirm() {
    Modal.confirm({
        title: 'Do you want to delete these items?',
        content: 'When clicked the OK button, this dialog will be closed after 1 second',
        onOk() {
            return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'));
        },
        onCancel() { },
    });
}
function info() {
    Modal.info({
        title: 'This is a notification message',
        content: (
            <div>
                <p>some messages...some messages...</p>
                <p>some messages...some messages...</p>
            </div>
        ),
        onOk() { },
    });
}

function success() {
    Modal.success({
        title: 'This is a success message',
        content: 'some messages...some messages...',
    });
}

function error() {
    Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
    });
}

function warning() {
    Modal.warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
    });
}


export default function Modals() {
    return (
        <div className="row">
            <Button onClick={confirm}>Confirm</Button>
            <Button onClick={info}>Info</Button>
            <Button onClick={success}>Success</Button>
            <Button onClick={error}>Error</Button>
            <Button onClick={warning}>Warning</Button>
        </div>
    );
}