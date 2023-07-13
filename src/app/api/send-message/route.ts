import { message } from 'antd';
import axios from 'axios';
import { NextApiResponse } from 'next';

const AURA_BEAUTY_CLINIC_BOT = {
  app_id: 'cli_a426424310789009',
  app_secret: 'L3FoXxPUlOQerSAhCjdHKh6NfxjKmX64',
};

const TABLE_AURA_CONTACT = {
  app_token: 'SeHebBYCIavlT3sngajuIldystf',
  table_id: 'tbl9PFCwZVcjqTsn',
};

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

export async function POST(request: Request, response: Response) {
  const { phone, name, address, service, chatId } = await request.json();
  const a = {
    en_us: {
      title: 'Aura Bot 🤖',
      content: [
        [
          {
            tag: 'text',
            text: '📱 SĐT:                👤 Khách hàng:',
          },
        ],
        [
          {
            tag: 'text',
            text: ` ${phone}      ${name}`,
          },
        ],
        [
          {
            tag: 'text',
            text: '',
          },
        ],
        [
          {
            tag: 'text',
            text: `🏠 ĐC: ${address}`,
          },
        ],
        [
          {
            tag: 'text',
            text: '',
          },
        ],
        [
          {
            tag: 'text',
            text: `🛅 Dịch vụ: ${service}`,
          },
        ],
      ],
    },
  };
  let tokenNew = await tenantToken(
    AURA_BEAUTY_CLINIC_BOT.app_id,
    AURA_BEAUTY_CLINIC_BOT.app_secret
  );
  var data = JSON.stringify({
    receive_id: 'oc_fde65a8f5b419338203e85835b161942',
    msg_type: 'text',
    content: '{"text":"function generate UUID test"}',
    uuid: generateUUID(),
  });

  var config = {
    method: 'POST',
    url: 'https://open.larksuite.com/open-apis/im/v1/messages?receive_id_type=chat_id',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenNew}`,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
