
export interface ServiceDetail {
  title: string;
  description?: string;
  items?: string[];
  icon?: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  details: (string | ServiceDetail)[];
  icon: string;
  category: 'civil' | 'industrial' | 'specialized' | 'machinery' | 'engineering' | 'instrumentation';
  image: string | string[];
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
