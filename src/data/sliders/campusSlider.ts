import camau from '../../statics/images/campus/camau.png';
import dongthap from '../../statics/images/campus/dongthap.png';
import kiengiang from '../../statics/images/campus/kiengiang.png';
import mapCamau from '../../statics/images/campus/maps/camau_map.png';
import vinhLong from '../../statics/images/campus/vinhlong.png';
import phuYen from '../../statics/images/campus/phuyen.png';
import { StaticImageData } from 'next/image';

interface ListImageDetails {
  index: React.Key;
  image_details: StaticImageData;
}

export const dataCampus = [
  {
    key: 1,
    name: 'Thẩm mỹ viện Quốc tế Aura - Đồng Tháp',
    name_short: 'TP Đồng Tháp',
    address: 'P1,Đồng Tháp',
    address_hover: 'PG1-09 &PG1-10 - Vincom Shophouse Cà Mau, Phường 1, Cà Mau',
    time: '08:00 - 21:00',
    map: mapCamau,
    image: dongthap,
    image_list: [
      {
        index: 1,
        image_details: vinhLong,
      },
      {
        index: 2,
        image_details: dongthap,
      },
      {
        index: 3,
        image_details: camau,
      },
    ],
  },

  {
    key: 2,
    name: 'Thẩm mỹ viện Quốc tế Aura - Cà Mau',
    name_short: 'TP Cà Mau',
    address: 'P1, Cà Mau',
    address_hover: 'PG1-09 &PG1-10 - Vincom Shophouse Cà Mau, Phường 1, Cà Mau',
    time: '08:00 - 21:00',
    map: mapCamau,
    image: camau,
    image_list: [
      {
        index: 1,
        image_details: camau,
      },
    ],
  },
  {
    key: 3,
    name: 'Thẩm mỹ viện Quốc tế Aura - Kiên Giang',
    name_short: 'TP Kiên Giang',
    address: 'Rạch Giá, Kiên Giang',
    address_hover: 'PG1-09 &PG1-10 - Vincom Shophouse Cà Mau, Phường 1, Cà Mau',
    time: '08:00 - 21:00',
    map: mapCamau,
    image: kiengiang,
    image_list: [
      {
        index: 1,
        image_details: kiengiang,
      },
      {
        index: 2,
        image_details: dongthap,
      },
    ],
  },
  {
    key: 4,
    name: 'Thẩm mỹ viện Quốc tế Aura - Vĩnh Long',
    name_short: 'TP Vĩnh Long',
    address: 'P4, Vĩnh Long',
    address_hover: 'PG1-09 &PG1-10 - Vincom Shophouse Cà Mau, Phường 1, Cà Mau',
    time: '08:00 - 21:00',
    map: mapCamau,
    image: vinhLong,
    image_list: [
      {
        index: 1,
        image_details: vinhLong,
      },
      {
        index: 2,
        image_details: dongthap,
      },
    ],
  },
  {
    key: 5,
    name: 'Thẩm mỹ viện Quốc tế Aura - Phú Yên',
    name_short: 'Tỉnh Phú Yên',
    address: 'Tuy Hòa, Phú Yên',
    address_hover: 'PG1-09 &PG1-10 - Vincom Shophouse Cà Mau, Phường 1, Cà Mau',
    time: '08:00 - 21:00',
    map: mapCamau,
    image: phuYen,
    image_list: [
      {
        index: 1,
        image_details: phuYen,
      },
      {
        index: 2,
        image_details: dongthap,
      },
    ],
  },
];

export const dataCampusNearBy = [
  {
    key: 1,
    name: 'Thẩm mỹ viện Quốc tế Aura - TP Hồ Chí Minh',
    name_short: 'TP Hồ Chí Minh',
    address: 'Quận 10, TP HCM',
    address_hover: 'Số 1, Đường 3/2, Phường 11, Q.10.',
    time: '08:00 - 21:00',
    map: mapCamau,
    image: dongthap,
    image_list: [
      {
        index: 1,
        image_details: vinhLong,
      },
      {
        index: 2,
        image_details: dongthap,
      },
      {
        index: 3,
        image_details: camau,
      },
    ],
  },
  {
    key: 2,
    name: 'Thẩm mỹ viện Quốc tế Aura - TP Long Xuyên',
    name_short: 'TP Long Xuyên',
    address: 'F6, Long Xuyên',
    address_hover: 'Số 5-7 Nguyễn Huy Tưởng, F6, Q.Bình Thạnh',
    time: '08:00 - 21:00',
    map: mapCamau,
    image: dongthap,
    image_list: [
      {
        index: 1,
        image_details: vinhLong,
      },
      {
        index: 2,
        image_details: dongthap,
      },
      {
        index: 3,
        image_details: camau,
      },
    ],
  },
  {
    key: 3,
    name: 'Thẩm mỹ viện Quốc tế Aura - TP Cần Thơ',
    name_short: 'TP Cần Thơ',
    address: 'Ninh Kiều, Cần Thơ',
    address_hover: 'Số 207 Đường 30/4, Xuân Khánh, Ninh Kiều, Cần Thơ.',
    time: '08:00 - 21:00',
    map: mapCamau,
    image: dongthap,
    image_list: [
      {
        index: 1,
        image_details: dongthap,
      },
      {
        index: 2,
        image_details: dongthap,
      },
    ],
  },
  {
    key: 4,
    name: 'Thẩm mỹ viện Quốc tế Aura - Vĩnh Long',
    name_short: 'TP Vĩnh Long',
    address: 'P4, Vĩnh Long',
    address_hover: 'PG1-09 &PG1-10 - Vincom Shophouse Cà Mau, Phường 1, Cà Mau',
    time: '08:00 - 21:00',
    map: mapCamau,
    image: vinhLong,
    image_list: [
      {
        index: 1,
        image_details: vinhLong,
      },
      {
        index: 2,
        image_details: dongthap,
      },
    ],
  },
  {
    key: 5,
    name: 'Thẩm mỹ viện Quốc tế Aura - TP Rạch Giá',
    name_short: 'TP Rạch Giá',
    address: 'An Hòa, Rạch Giá',
    address_hover: 'PL 1-20 KĐT Phú Cường, An Hòa, TP. Rạch Giá.',
    time: '08:00 - 21:00',
    map: mapCamau,
    image: dongthap,
    image_list: [
      {
        index: 1,
        image_details: vinhLong,
      },
      {
        index: 2,
        image_details: dongthap,
      },
    ],
  },
  {
    key: 6,
    name: 'Thẩm mỹ viện Quốc tế Aura - Cà Mau',
    name_short: 'TP Cà Mau',
    address: 'P1, Cà Mau',
    address_hover: 'PG1-09 &PG1-10 - Vincom Shophouse Cà Mau, Phường 1, Cà Mau',
    time: '08:00 - 21:00',
    map: mapCamau,
    image: camau,
    image_list: [
      {
        index: 1,
        image_details: vinhLong,
      },
      {
        index: 2,
        image_details: dongthap,
      },
      {
        index: 3,
        image_details: camau,
      },
    ],
  },
  {
    key: 7,
    name: 'Thẩm mỹ viện Quốc tế Aura - Đồng Tháp',
    name_short: 'TP Đồng Tháp',
    address: 'P1,Đồng Tháp',
    address_hover: 'PG1-09 &PG1-10 - Vincom Shophouse Cà Mau, Phường 1, Cà Mau',
    time: '08:00 - 21:00',
    map: mapCamau,
    image: dongthap,
    image_list: [
      {
        index: 1,
        image_details: dongthap,
      },

      {
        index: 2,
        image_details: camau,
      },
    ],
  },
  {
    key: 8,
    name: 'Thẩm mỹ viện Quốc tế Aura - Phú Yên',
    name_short: 'Tỉnh Phú Yên',
    address: 'Tuy Hòa, Phú Yên',
    address_hover: 'PG1-09 &PG1-10 - Vincom Shophouse Cà Mau, Phường 1, Cà Mau',
    time: '08:00 - 21:00',
    map: mapCamau,
    image: phuYen,
    image_list: [
      {
        index: 1,
        image_details: phuYen,
      },
      {
        index: 2,
        image_details: dongthap,
      },
      {
        index: 3,
        image_details: camau,
      },
      {
        index: 4,
        image_details: phuYen,
      },
    ],
  },
];
export type { ListImageDetails };
