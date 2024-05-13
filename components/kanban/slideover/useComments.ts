import { useDealSlideStore } from '@/stores/deal-slide.store';
import { useQuery } from '@tanstack/vue-query';
import { COLLECTIONS_DEALS, DB_ID } from '~/app.constants';

export function useComments() {
  const store = useDealSlideStore();
  const cardId = store.card?.id || '';
  return useQuery({
    queryKey: ['deal', cardId],
    queryFn: () => DB.getDocument(DB_ID, COLLECTIONS_DEALS, cardId),
  });
}
