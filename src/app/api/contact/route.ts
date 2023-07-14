import LarkService from '@/services/lark/larkService';
import { message } from 'antd';
import axios from 'axios';
import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
interface Contact {
  name?: string;
  phone?: string;
  address?: string;
  service?: string;
}

const AURA_BEAUTY_CLINIC_BOT = {
  app_id: 'cli_a426424310789009',
  app_secret: 'L3FoXxPUlOQerSAhCjdHKh6NfxjKmX64',
};

export async function POST(request: Request, response: Response) {
  console.log('Im here contact');
  const tokenNew = await LarkService.tenantToken(
    process.env.NEXT_PUBLIC_AURA_BOT_APP_ID,
    process.env.NEXT_PUBLIC_AURA_BOT_APP_SECRET
  );
  const data: Contact = await request.json();
  const { name, phone, address, service } = data;
  var dataP = JSON.stringify({
    fields: {
      'Họ và Tên khách hàng': name,
      'Số điện thoại': phone,
      'Nơi sinh sống': address,
      'Dịch vụ muốn tư vấn': service,
    },
  });

  var config = {
    method: 'POST',
    url: 'https://open.larksuite.com/open-apis/bitable/v1/apps/SeHebBYCIavlT3sngajuIldystf/tables/tbl9PFCwZVcjqTsn/records',
    headers: {
      Authorization: `Bearer ${tokenNew}`,
      'Content-Type': 'application/json',
    },
    data: dataP,
  };

  return axios(config)
    .then(function (_response) {
      console.log(JSON.stringify(_response.data));
      return NextResponse.json({
        msg: 'Successfully created new user contact',
        status: 200,
      });
    })
    .catch(function (error) {
      console.log(123, error);
    });
}
