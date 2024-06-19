'use client';

import * as z from 'zod';

export const categoryFillterValidate = z.object({
  category: z.string(),
  pricing: z.string(),
});
