import LarkService from '@/services/lark/larkService';
import axios from 'axios';

class LarkController {
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
}
