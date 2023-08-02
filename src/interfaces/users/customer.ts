interface NoteUser {
  id: string; //author id
  content: string;
  time: Date;
  name: string;
  role: string;
  avatar: string;
}

export interface ICustomer {
  name: string;
  id: string;
  phone: string;
  note: NoteUser[] | null;
  clinic_name: string;
  created_at: string;
  resource_label: string;
  resource_name: string;
  avatar: string;
  relationship: string;
  current_job: string;
  email: string;
  ads: string;
  category: string;
  status: IStatus;
  gender: string;
  birthday: string;
  address: Address;
  rank: string;
  adviser: Adviser;
  history_calls: HistoryCall[];
  services: IService[] | null;
  products: IProduct[] | null;
}

interface IService {
  id: string;
  name: string;
  count: number;
  image: string;
  paid: number;
  order_id: {
    id: string;
    clinic: string;
    created_at: string;
  }[];
}

interface IProduct {
  id: string;
  name: string;
  count: number;
  image: string;
  paid: number;
}
interface IStatus {
  status: string;
  interact_status: string;
  detail_status: string;
  result_status: string;
}

export interface Address {
  district: District;
  ward: Ward;
  city: City;
  address: string;
}

export interface District {
  code: any;
  name: any;
}

export interface Ward {
  code: any;
  name: any;
}

export interface City {
  code: any;
  name: string;
}

export interface Adviser {
  telesale: Telesale;
  agency: Agency;
  live_chat: LiveChat;
}

export interface Telesale {
  id: string;
  name: string;
}

export interface Agency {
  name: string;
  id: string;
}

export interface LiveChat {
  name: string;
}

export interface HistoryCall {
  created_date: number;
  src: string;
  status: string;
  created_at: string;
}
