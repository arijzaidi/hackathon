import { ElementType } from 'react';

export type SubMenuItem = {
  label: string;
  href: string;
};

export type MenuItem = {
  icon: ElementType;
  label: string;
  href?: string;
  subItems?: SubMenuItem[];
};