import { Service } from './service';

interface Category {
  key: React.Key;
  category_name: string;
  service_group: Service[];
}
export type { Category };
