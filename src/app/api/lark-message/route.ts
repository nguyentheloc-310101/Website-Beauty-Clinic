import axios from 'axios';
import { NextResponse } from 'next/server';

interface Contact {
  name?: string;
  phone?: string;
  address?: string;
  service?: string;
}

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

const tenantToken = async (appId: any, appSecret: any) => {
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
  console.log('Im here message');

  const dataForm: Contact = await request.json();
  const { name, phone, address, service } = dataForm;

  let tokenNew = await tenantToken(
    process.env.NEXT_PUBLIC_AURA_BOT_APP_ID,
    process.env.NEXT_PUBLIC_AURA_BOT_APP_SECRET
  );
  const a = {
    en_us: {
      title: 'Aura Beauty Clinic Bot 🤖',
      content: [
        [
          {
            tag: 'text',
            text: `👤 Khách hàng: ${name}`,
          },
        ],
        [
          {
            tag: 'text',
            text: `📱 SĐT: ${phone}`,
          },
        ],

        [
          {
            tag: 'text',
            text: `🏠 Địa chỉ: ${address}`,
          },
        ],
        // [
        //   {
        //     tag: 'text',
        //     text: '',
        //   },
        // ],
        [
          {
            tag: 'text',
            text: `🛅 Dịch vụ: ${service}`,
          },
        ],
      ],
    },
  };
  var data = JSON.stringify({
    receive_id: 'oc_fde65a8f5b419338203e85835b161942',
    content: JSON.stringify(a),
    msg_type: 'post',
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

  return axios(config)
    .then(function (_response) {
      console.log(JSON.stringify(_response.data));
      return NextResponse.json({
        msg: 'Successfully send message to Group Chat',
        status: 200,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
