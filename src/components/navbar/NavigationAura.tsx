import { Dropdown, MenuProps, Space } from 'antd';
const items: MenuProps['items'] = [
  {
    key: '1',
    type: 'group',
    label: <div className="font-[500] text-[#bc2449]">Mắt</div>,
    children: [
      {
        key: '1-1',
        label: 'Nhấn mí',
      },
      {
        key: '1-2',
        label: 'Cắt mí MiniDeep 6D',
      },
      {
        key: '1-3',
        label: 'Cắt Mí Dove Eyes',
      },
      {
        key: '1-4',
        label: 'Treo cung nội bì',
      },
    ],
  },
  {
    key: '2',
    type: 'group',
    label: <div className="font-[500] text-[#bc2449]">Mũi</div>,
    children: [
      {
        key: '2-1',
        label: 'Nội khoa: Nâng sống mũi',
      },
      {
        key: '2-2',
        label: 'Nội khoa: Nâng đầu mũi',
      },
      {
        key: '2-3',
        label: 'Ngoại khoa: Thu gọn cánh mũi',
      },
      {
        key: '2-4',
        label: 'Ngoại khoa: Tạo hình dáng mũi',
      },
      {
        key: '2-5',
        label: 'Ngoại khoa: Nâng mũi',
      },
    ],
  },
];

const NavigationAura = () => {
  return (
    <div className="hidden w-full text-white bg-[#bc2449] text-[14px] lg:flex items-center justify-between font-[600] xl:px-[10rem] lg:px-[7rem] md:px-[6rem] py-[10px] hover:text-[]">
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <span className="text-center hover:text-[#f7d5dd]">
              Phẩu thuật thẩm mỹ
            </span>
          </Space>
        </a>
      </Dropdown>
      <span className="text-center hover:text-[#f7d5dd]">Điều trị nám</span>
      <span className="text-center hover:text-[#f7d5dd]">Phun xăm</span>
      <span className="text-center hover:text-[#f7d5dd]">
        Tạo hình không xâm lấn
      </span>
      <span className="text-center hover:text-[#f7d5dd]">Nâng cơ trẻ hóa</span>
      <span className="text-center hover:text-[#f7d5dd]">Dịch vụ khác</span>
    </div>
  );
};

export default NavigationAura;
