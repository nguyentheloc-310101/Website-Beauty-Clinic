import axios from 'axios';
import { NextResponse } from 'next/server';
import { message } from 'antd';
import LarkService from '@/services/lark/larkService';
import { NextApiRequest, NextApiResponse } from 'next';
interface Contact {
  name: string;
  phone: string;
  address: string;
  service: string;
}
// const objTest = {
//   name: 'trong',
//   phone: '123',
//   address: 'ca mau',
//   service: 'nang nguc',
// };
const AURA_BEAUTY_CLINIC_BOT = {
  app_id: 'cli_a426424310789009',
  app_secret: 'L3FoXxPUlOQerSAhCjdHKh6NfxjKmX64',
};
const TABLE_AURA_CONTACT = {
  app_token: 'SeHebBYCIavlT3sngajuIldystf',
  table_id: 'tbl9PFCwZVcjqTsn',
};

const tenantToken = async (appId: string, appSecret: string) => {
  try {
    var data = JSON.stringify({
      app_id: appId,
      app_secret: appSecret,
    });
    var config = {
      method: 'POST',
      url: 'https://open.larksuite.com/open-apis/auth/v3/app_access_token/internal',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    const token = await axios(config);
    console.log('================================================');
    console.log(token.data.tenant_access_token);
    console.log('================================================');
    return token.data.tenant_access_token;
  } catch (e) {
    throw new Error(message as any);
  }
};

export async function POST(request: Request, res: NextApiResponse) {
  const dataAuthBot = JSON.stringify({
    app_id: AURA_BEAUTY_CLINIC_BOT.app_id,
    app_secret: AURA_BEAUTY_CLINIC_BOT.app_secret,
  });
  const configBot = {
    method: 'POST',
    url: 'https://open.larksuite.com/open-apis/auth/v3/app_access_token/internal',
    headers: {
      'Content-Type': 'application/json',
    },
    data: dataAuthBot,
  };
  const token = await axios(configBot);
  if (token) {
    return res.status(200).send({
      status: 'Success',
      data: token.data,
    });
  }
  const data: Contact = await request.json();
  const { name, phone, address, service } = data;
  let tokenNew = await tenantToken(
    AURA_BEAUTY_CLINIC_BOT.app_id,
    AURA_BEAUTY_CLINIC_BOT.app_secret
  );

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
    url: `https://open.larksuite.com/open-apis/bitable/v1/apps/${TABLE_AURA_CONTACT.app_token}/tables/${TABLE_AURA_CONTACT.table_id}/records?user_id_type=open_id`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data: dataP,
  };
  axios(config)
    .then(function (response: any) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error: any) {
      console.log(error);
    });
}
