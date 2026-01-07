import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description?: string;
  icon: LucideIcon;
}

export interface JobOffer {
  title: string;
  description: string;
  tasks: string[];
  requirements: string[];
}
