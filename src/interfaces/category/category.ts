import { IServiceDetails } from '../service/service';

interface ITag {
  id: string;
  name: string;
}

interface ICategory {
  id: string;
  name: string;
  price: number;
  image: string;
  services: IServiceDetails[];
  tags: ITag[];
}

export type { ITag, ICategory };
