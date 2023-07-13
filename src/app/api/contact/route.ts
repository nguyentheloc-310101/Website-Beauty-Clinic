import { message } from 'antd';
import axios from 'axios';
import { NextApiResponse } from 'next';
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

    return token.data.tenant_access_token;
  } catch (e) {
    console.error(e);
    return { error: 'Failed to get access token' };
  }
};

export async function POST(request: Request, response: Response) {
  const tokenNew = await tenantToken(
    AURA_BEAUTY_CLINIC_BOT.app_id,
    AURA_BEAUTY_CLINIC_BOT.app_secret
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

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
