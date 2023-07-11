import axios from 'axios';
import { supabase } from './supabase';

const backend_url = `http://localhost:3001/api/v1`;
// const backend_url = `https://api-staging.auradental.vn/api/v1`;

export async function getStreamKey(
  user_id: any,
  username: string,
  avatar: string
) {
  let res = await axios.post(backend_url + '/stream/getStreamKey', {
    userName: username,
    avatar,
  });

  if (res.status === 200) {
    let stream_info = await supabase
      .from('stream_info')
      .insert({
        user_id,
        push_path: res.data?.PushPath,
        activity_id: res.data?.ActivityIdStr,
        push_url: res.data?.PushUrl,
        streaming_code: res.data?.StreamingCode,
        name: username,
        avatar: avatar,
      })
      .select();
    if (stream_info?.data) {
      let token = await axios.get(
        backend_url +
          `/stream/getToken?activityId=${stream_info?.data[0].activity_id}`
      );
      if (token) {
        await supabase
          .from('stream_info')
          .update({ token: token.data.data.Result.Token })
          .eq('user_id', user_id);
      }

      return stream_info?.data[0];
    }
  }
}
