interface Clinic {
  id: string;
  created_at: string;
  name: string;
  avatar: string;
  label: string | null;
  address: string;
  description: string;
  active: boolean;
  district: string | null;
}

export type { Clinic };
