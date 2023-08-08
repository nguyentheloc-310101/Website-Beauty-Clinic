interface IBase {
  id: string; // supabase id
  key: number; // key for react mapping table
}

export interface IServiceStep extends IBase {
  step: number;
  image: any;
  desc: string;
}

export interface IService extends IBase {
  image: string;
  price: number;
  content: string;
  name: string;
  category_id: string;
}

export interface IServiceCategory extends IBase {
  slug: string;
  name: string;
}
