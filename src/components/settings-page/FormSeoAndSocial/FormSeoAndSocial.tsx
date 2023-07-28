import { Form } from 'antd';
import InputForm from '../../common/form/input/InputForm';
import UploadImageSetting from '../upload-image/UploadImageSetting';
import SwitchForm from '../../common/form/switch/SwitchForm';

const FormSeoAndSocial = () => {
  return (
    <div>
      <Form layout={'vertical'}>
        <InputForm
          label="Tiêu đề trang"
          labelSize="16px"
          placeholder="Nhập tiêu đề trang (Độ dài tối ưu không vượt quá 70 ký tự)"
        />
        <InputForm
          label="Mô tả trang"
          labelSize="16px"
          placeholder="Nhập mo tả trang (Độ dài tối ưu không vượt quá 160 ký tự)"
        />
        <InputForm
          label="Từ khóa về trang"
          labelSize="16px"
          placeholder="Nhập từ khóa về trang. Ví dụ: Aura Beauty, Thẩm mỹ Aura"
        />
        <UploadImageSetting
          label="Hình ảnh khi chia sẽ"
          placeholder="Nhập đường liên kết hình ảnh (K/T khuyên dùng 1200x630px)"
        />
        <UploadImageSetting
          label="Hình ảnh khi chia sẽ"
          placeholder="Nhập đường liên kết hình ảnh (K/T khuyên dùng 256x256px)"
        />
        <InputForm
          label="Canonical URL"
          labelSize="16px"
          placeholder="Nhập Canonical URL (Tùy chọn)"
        />
        <SwitchForm textNextToSwitch="Googlebot chỉ mục" />
      </Form>
    </div>
  );
};

export default FormSeoAndSocial;
