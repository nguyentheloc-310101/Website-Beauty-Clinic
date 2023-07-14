import { NextApiResponse } from 'next';

interface Contact {
  name?: string;
  phone?: string;
  address?: string;
  service?: string;
}

export async function POST(request: Request, response: NextApiResponse) {
  const dataForm: Contact = await request.json();
  const { name, phone, address, service } = dataForm;

  const axios = require('axios');
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_WEBHOOK_BOT_EXTERNAL_URL,
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
    console.log(JSON.stringify(res.data));
    return response.json({
      msg: 'Successfully send message to Group Chat',
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return response.status(500).json({ error: 'Internal server error' });
  }
}
