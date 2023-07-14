import axios from 'axios';
import { NextResponse } from 'next/server';
interface Contact {
  name?: string;
  phone?: string;
  address?: string;
  service?: string;
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
  console.log('Im here contact');
  const tokenNew = await tenantToken(
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
