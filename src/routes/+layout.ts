import { browser } from '$app/environment';
import { api, setAuthHeaders } from '$lib/utils/api';
import { QueryClient } from '@tanstack/svelte-query';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
        refetchOnWindowFocus: false
      }
    }
  });

  const accessToken = data.accessToken;
  if (accessToken) {
    setAuthHeaders(accessToken);
    return { queryClient, accessToken };
  }
  return { queryClient };
};
