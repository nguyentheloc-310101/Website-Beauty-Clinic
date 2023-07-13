import { message } from 'antd';
import axios from 'axios';
import { NextResponse } from 'next/server';

const AURA_BEAUTY_CLINIC_BOT = {
  appId: 'cli_a426424310789009',
  appSecret: 'L3FoXxPUlOQerSAhCjdHKh6NfxjKmX64',
};

class LarkService {
  static tenantToken = async (appId: string, appSecret: string) => {
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
}
export default LarkService;
