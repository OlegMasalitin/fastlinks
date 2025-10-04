export interface LinkItem {
  id: string | null;
  name: string;
  url: string;
  tags: string[];
  visible: boolean;
  isNew: boolean;
  state: number;
  archived: boolean;
}
