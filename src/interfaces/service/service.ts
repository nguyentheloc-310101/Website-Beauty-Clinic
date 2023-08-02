import { CategoryService } from './category-service';
interface Service {
  id: string;
  created_at: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category_id: CategoryService;
  active: boolean;
  label: string;
  status: string;
}

interface ExtendedService extends Service {
  quantity: number;
  newPrice: number;
}

export type { Service, ExtendedService };
