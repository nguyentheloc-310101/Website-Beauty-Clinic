interface IBase {
  id: string;
  key: React.Key;
}

interface Category extends IBase {
  created_at: any;
  name: string;
  active: true;
}

export type { Category };
