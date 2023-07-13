import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
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

const TABLE_AURA_CONTACT = {
  app_token: 'SeHebBYCIavlT3sngajuIldystf',
  table_id: 'tbl9PFCwZVcjqTsn',
};
// const tenantTokenAppBot = async () => {
//   try {
//     const { app_id, app_secret } = AURA_BEAUTY_CLINIC_BOT;
//     const data = { appId: app_id, appSecret: app_secret };
//     const config = {
//       method: 'POST',
//       url: 'https://open.larksuite.com/open-apis/auth/v3/app_access_token/internal',
//       headers: { 'Content-Type': 'application/json' },
//       data,
//     };
//     const {
//       data: { tenant_access_token },
//     } = await axios(config);
//     return tenant_access_token;
//   } catch (error) {
//     throw new Error('error');
//   }
// };

function generateUUID(): string {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let uuid = '';

  for (let i = 0; i < 50; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    uuid += chars[randomIndex];
  }

  return uuid;
}

const tenantToken = async (appId: string, appSecret: string) => {
  try {
    const data = JSON.stringify({
      app_id: appId,
      app_secret: appSecret,
    });
    const config = {
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
    console.error(e);
    return { error: 'Failed to get access token' };
  }
};

export async function POST(request: Request, respons: NextApiResponse) {
  const dataForm: Contact = await request.json();
  const { name, phone, address, service } = dataForm;

  const axios = require('axios');
  const res = await axios.post(
    'https://open.larksuite.com/open-apis/bot/v2/hook/ea66e46c-7222-44bc-9568-eadfe4bcf7b2',
    {
      msg_type: 'text',
      content: `{"text":"Tên khách hàng: ${String(
        name
      )}\\nSố điện thoại: ${phone} \\nĐịa chỉ: ${address} \\nDịch vụ: ${service}"}`,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return res
    .then(function (_response: any) {
      console.log(JSON.stringify(_response.data));
      return NextResponse.json({
        msg: 'Successfully send message to Group Chat',
        status: 200,
      });
    })
    .catch(function (error: any) {
      console.log(error);
    });
  //   console.log(res);
}
