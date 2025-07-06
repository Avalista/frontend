import { CategoryKey } from '../types/project.types';

const categoryColorMap: Record<CategoryKey, { primary: string; pastel: string }> = {
  AF: { primary: 'var(--color-af-primary)', pastel: 'var(--color-af-pastel)' },
  CO: { primary: 'var(--color-co-primary)', pastel: 'var(--color-co-pastel)' },
  FM: { primary: 'var(--color-fm-primary)', pastel: 'var(--color-fm-pastel)' },
  NA: { primary: 'var(--color-na-primary)', pastel: 'var(--color-na-pastel)' },
  PU: { primary: 'var(--color-pu-primary)', pastel: 'var(--color-pu-pastel)' },
  PD: { primary: 'var(--color-pd-primary)', pastel: 'var(--color-pd-pastel)' },
  AC: { primary: 'var(--color-ac-primary)', pastel: 'var(--color-ac-pastel)' },
  LGPD: { primary: 'var(--color-lgpd-primary)', pastel: 'var(--color-lgpd-pastel)' },
};

export const getProjectColors = (category: CategoryKey | null) => {
  if (category && categoryColorMap[category]) {
    return categoryColorMap[category];
  }
  return {
    primary: 'var(--color-neutral-primary)',
    pastel: 'var(--color-neutral-pastel)',
  };
};