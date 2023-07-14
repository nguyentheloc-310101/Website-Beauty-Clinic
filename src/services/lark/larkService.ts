import { message } from 'antd';
import axios from 'axios';
import { NextResponse } from 'next/server';

const AURA_BEAUTY_CLINIC_BOT = {
  appId: 'cli_a426424310789009',
  appSecret: 'L3FoXxPUlOQerSAhCjdHKh6NfxjKmX64',
};

class LarkService {
  static tenantToken = async (appId: any, appSecret: any) => {
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
  static generateUUID(): string {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uuid = '';

    for (let i = 0; i < 50; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      uuid += chars[randomIndex];
    }

    return uuid;
  }
  static tenantTokenAppBot = async (app_id: string, app_secret: string) => {
    try {
      const data = { appId: app_id, appSecret: app_secret };
      const config = {
        method: 'POST',
        url: 'https://open.larksuite.com/open-apis/auth/v3/app_access_token/internal',
        headers: { 'Content-Type': 'application/json' },
        data,
      };
      const {
        data: { tenant_access_token },
      } = await axios(config);
      return tenant_access_token;
    } catch (error) {
      throw new Error('error');
    }
  };
}
export default LarkService;
