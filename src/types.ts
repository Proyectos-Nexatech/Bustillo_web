
export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
  category: 'civil' | 'industrial' | 'specialized' | 'machinery' | 'engineering';
  image: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  client: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
}
