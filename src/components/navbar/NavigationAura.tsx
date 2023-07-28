import { Dropdown, MenuProps, Space } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface itemSubMenu {
  key: string;
  label: string;
}
interface subMenu {
  key: React.Key | string;
  type: string;
  label: React.ReactNode;
  children: itemSubMenu[];
}
const itemsPT: subMenu[] = [
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
const itemsNangCo: subMenu[] = [
  {
    key: '1',
    type: 'group',
    label: <div className="font-[500] text-[#bc2449]">Xóa nhăn</div>,
    children: [
      {
        key: '1-1',
        label: 'Bioyoung',
      },
      {
        key: '1-2',
        label: 'Oligio RF',
      },
      {
        key: '1-3',
        label: 'HIFU PLUS 4.0',
      },
    ],
  },
  {
    key: '2',
    type: 'group',
    label: <div className="font-[500] text-[#bc2449]">Trẻ hóa tầng sâu</div>,
    children: [
      {
        key: '2-1',
        label: 'Diamond Lifting',
      },
      {
        key: '2-2',
        label: 'Golden Ultrasound',
      },
      {
        key: '2-3',
        label: 'Lippzero Magic',
      },
      {
        key: '2-4',
        label: 'Bro-shape Facial',
      },
    ],
  },
];
const itemsPhunXam: subMenu[] = [
  {
    key: '1',
    type: 'group',
    label: <div className="font-[500] text-[#bc2449]">Môi</div>,
    children: [
      {
        key: '1-1',
        label: 'Phun/ Cấy Nano',
      },
      {
        key: '1-2',
        label: 'Sexy Lips',
      },
    ],
  },
  {
    key: '2',
    type: 'group',
    label: <div className="font-[500] text-[#bc2449]">Chân mày</div>,
    children: [
      {
        key: '2-1',
        label: 'Shading',
      },
      {
        key: '2-2',
        label: 'Hairstroke/ Wings Hairstroke',
      },
    ],
  },
  {
    key: '3',
    type: 'group',
    label: <div className="font-[500] text-[#bc2449]">Mí</div>,
    children: [
      {
        key: '3-1',
        label: 'Mở tròng',
      },
      {
        key: '3-2',
        label: 'Đá đuôi',
      },
    ],
  },
];
const itemsTaoHinh: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="">
        HA Collagen
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="">
        Botox
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="">
        Căng chỉ
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="">
        Lipozero Magic (Mỡ tự thân)
      </a>
    ),
  },
];

const itemsTriNam: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="">
        Môi
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="">
        Chân mày
      </a>
    ),
  },
];
const itemsOtherService: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="">
        Giảm béo
      </a>
    ),
  },

  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="">
        Điều trị mụn
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="">
        Detox da
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="">
        Dưỡng sinh
      </a>
    ),
  },
  {
    key: '5',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="">
        Tắm trắng
      </a>
    ),
  },
];

//TODO: add drop down categories
const NavigationAura = () => {
  const [itemDropDown, setItemDropDown] = useState<MenuProps['items']>([]);
  const handleMouseEnter = (item: MenuProps['items']) => {
    setItemDropDown(item);
  };

  let items: MenuProps['items'] = itemDropDown;
  return (
    <div className="hidden w-full text-white bg-[#bc2449] text-[14px] lg:flex items-center justify-between font-[600] xl:px-[10rem] lg:px-[7rem] md:px-[6rem] py-[10px] hover:text-[]">
      <div
        className="cursor-pointer"
        onMouseEnter={() => handleMouseEnter(itemsPT)}>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <span className="text-center hover:text-[#f7d5dd]">
                Phẩu thuật thẩm mỹ
              </span>
            </Space>
          </a>
        </Dropdown>
      </div>

      <div
        className="cursor-pointer"
        onMouseEnter={() => handleMouseEnter(itemsTriNam)}>
        <Dropdown menu={{ items }}>
          <Link href="/service-details">
            <Space>
              <span className="text-center hover:text-[#f7d5dd]">Trị nám</span>
            </Space>
          </Link>
        </Dropdown>
      </div>
      <div
        className="cursor-pointer"
        onMouseEnter={() => handleMouseEnter(itemsPhunXam)}>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <span className="text-center hover:text-[#f7d5dd]">Phun xăm</span>
            </Space>
          </a>
        </Dropdown>
      </div>
      <div
        className="cursor-pointer"
        onMouseEnter={() => handleMouseEnter(itemsTaoHinh)}>
        <Dropdown menu={{ items }}>
          <Space>
            <span className="text-center hover:text-[#f7d5dd]">
              Tạo hình không xâm lấn
            </span>
          </Space>
        </Dropdown>
      </div>

      <div
        className="cursor-pointer"
        onMouseEnter={() => handleMouseEnter(itemsNangCo)}>
        <Dropdown menu={{ items }}>
          <Space>
            <Link href="/service-details">
              <span className="text-center hover:text-[#f7d5dd]">
                Nâng cơ trẻ hóa
              </span>
            </Link>
          </Space>
        </Dropdown>
      </div>
      <div
        className="cursor-pointer"
        onMouseEnter={() => handleMouseEnter(itemsOtherService)}>
        <Dropdown menu={{ items }}>
          <Space>
            <span className="text-center hover:text-[#f7d5dd]">
              Dịch vụ khác
            </span>
          </Space>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavigationAura;
