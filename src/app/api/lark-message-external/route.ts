import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

interface Contact {
  name?: string;
  phone?: string;
  address?: string;
  service?: string;
}

export async function POST(request: Request, response: NextApiResponse) {
  const dataForm: Contact = await request.json();
  const { name, phone, address, service } = dataForm;
  const a = {
    msg_type: 'post',
    content: {
      post: {
        en_us: {
          title: 'Khách hàng liên hệ Aura Website',
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
            [
              {
                tag: 'text',
                text: `🛅 Dịch vụ: ${service}`,
              },
            ],
          ],
        },
      },
    },
  };

  const axios = require('axios');
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_WEBHOOK_BOT_EXTERNAL_URL,
      a,

      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(JSON.stringify(res.data));
    return NextResponse.json({
      msg: 'Successfully send message to Group Chat',
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: 'Internal server error' });
  }
}
