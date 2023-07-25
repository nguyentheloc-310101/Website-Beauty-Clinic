import { Form, Switch } from 'antd';
import React from 'react';
interface SwitchFormProps {
  label?: string;
  onChange?: any;
  textNextToSwitch?: string;
  defaultChecked?: boolean;
}

const SwitchForm = (props: SwitchFormProps) => {
  const { textNextToSwitch, onChange, defaultChecked } = props;
  return (
    <div>
      <Form.Item valuePropName="checked">
        <Switch
          className="bg-[#0000003F]"
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
        <span className="ml-[15px] font-[500]">{textNextToSwitch}</span>
      </Form.Item>
    </div>
  );
};

export default SwitchForm;
