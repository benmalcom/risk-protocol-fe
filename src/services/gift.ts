import { createRequest } from './http';
export const getGiftById = async (
  giftId: string,
  params: Record<string, string | boolean> | null,
  signal: AbortSignal
) => {
  return await createRequest({
    url: `/gifts/${giftId}`,
    method: 'get',
    params,
    signal,
  });
};

export const getGifts = async (signal: AbortSignal) => {
  return await createRequest({
    url: '/gifts',
    method: 'get',
    signal,
  });
};
