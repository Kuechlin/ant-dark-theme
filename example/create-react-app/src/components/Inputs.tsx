import React from 'react';
import { Input, Select, InputNumber, DatePicker, Checkbox, Radio } from 'antd';

export default function Inputs() {
    return (
        <div className="row">
            <Input style={{ width: 200 }} placeholder="Basic usage" />
            <Input style={{ width: 200 }} addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
            <InputNumber style={{ width: 200 }} min={1} max={10} defaultValue={3} />
            <DatePicker style={{ width: 200 }} />
            <Checkbox style={{ width: 200 }} >Checkbox</Checkbox>
            <Select style={{ width: 200 }} defaultValue="lucy" showSearch>
                <Select.Option value="jack">Jack</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="Yiminghe">yiminghe</Select.Option>
            </Select>
            <Radio style={{ width: 200 }}>Radio</Radio>
        </div>
    );
}