import { IDoctor } from '../doctor/doctor';

interface IBase {
  id: string; // supabase id
  key: number; // key for react mapping table
}
export interface IServiceStep extends IBase {
  step: number;
  image: any;
  description: string;
}
export interface IServiceDetails extends IBase {
  image: string;
  price: number;
  description: string;
  name: string;
  hasDoctors: boolean;
  doctors: IDoctor[];
  hasSteps: boolean;
  steps: IServiceStep[];
  service_id: string;
  others: IService[];
}
export interface IService extends IBase {
  name: string;
  category_id: string;
  // serviceDetails: IServiceDetails[];
  doctors: IDoctor[];
  others: IService[];
  slug: string;
}
export interface IServiceCategory extends IBase {
  slug: string;
  name: string;
}
