import { message } from 'antd';
import axios from 'axios';
import { NextResponse } from 'next/server';

const AURA_BEAUTY_CLINIC_BOT = {
  appId: 'cli_a426424310789009',
  appSecret: 'L3FoXxPUlOQerSAhCjdHKh6NfxjKmX64',
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

class LarkService {
  getTenantToken = catchAsync(async ({ req, res, next }: any) => {
    const { infoApp } = req.body;
    const data = JSON.stringify({
      app_id: infoApp.app_id,
      app_secret: infoApp.app_secret,
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
    if (token) {
      return res.status(200).send({
        status: 'Success',
        data: token.data,
      });
    } else {
      return next(new AppError('Không có token', 400));
    }
  });
  createARecord = catchAsync(async ({ req, res, next }: any) => {
    const { tableData, tableInfo } = req.body;
    if (!tableData)
      return NextResponse.json({ error: 'No data added' }, { status: 500 });
    let token = await tenantToken(
      AURA_BEAUTY_CLINIC_BOT.appId,
      AURA_BEAUTY_CLINIC_BOT.appSecret
    );
    let data = { fields: tableData };
    let config = {
      method: 'POST',
      url: `https://open.larksuite.com/open-apis/bitable/v1/apps/${tableInfo.app_token}/tables/${tableInfo.table_id}/records?user_id_type=open_id`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    const response = await axios(config);
    console.log(response.data.data);
    if (response.data.data) {
      return res.status(200).send({
        status: 'Success',
      });
    } else {
      return next(new AppError('Không thêm được record', 400));
    }
  });
}
export default LarkService;
