export type TService = {
    id: string;
    created_at: Date;
    name: string;
    price: number;
    description: string;
    image: string;
};
export type TChat = {
    created_at: Date;
    avatar?: string;
    user_id: string;
    name: string;
    content: string;
};
export type TLike = {
    created_at: Date;
    user_id: string;
};

export type TStaff = {
    name: string;
    phone: string;
    avatar: string;
    id: string;
};
export type TSession = {
    id: string;
    chats: TChat[];
    likes: TLike[];
    video_id: string;
    verify: boolean;
    thumbnail: string;
    name: string;
    services: TService[];
};
export interface ISessionStream {
    id: string;
    activity_id: string;
    created_at: Date;
    staff_id: TStaff[];
    token: string;
    name: string;
    confirmed: boolean;
    status: string;
    avatar: string;
    section: TSession[];
}
