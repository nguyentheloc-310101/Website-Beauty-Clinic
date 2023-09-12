import axios from "axios";

const backend_url = process.env.NEXT_PUBLIC_API + "/api/v1";

export async function getVideoInfo(activityId: string, videoId: string) {
    let response = await axios.post(backend_url + "/stream/getVideoInfo", {
        activityId,
        videoId,
    });
    if (response.data) {
        return response.data;
    }
    return null;
}
