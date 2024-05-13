import type { IDeal } from '@/types/deals.types';
import { DB } from '@/utils/appwrite';
import { useQuery } from '@tanstack/vue-query';
import { COLLECTIONS_DEALS, DB_ID } from '~/app.constants';
import { KANBAN_DATA } from './kanban.data';
import type { ICard } from './kanban.types';

export function useKanbanQuery() {
  return useQuery({
    queryKey: ['deals'],
    queryFn: () => DB.listDocuments(DB_ID, COLLECTIONS_DEALS),
    select(data) {
      const newBoard = KANBAN_DATA.map(column => ({
        ...column,
        items: [] as ICard[],
      }));
      const deals = data.documents as unknown as IDeal[];
      for (const deal of deals) {
        const column = newBoard.find(column => column.id === deal.status);
        if (column) {
          column.items.push({
            $createdAt: deal.$createdAt,
            id: deal.$id,
            name: deal.name,
            price: deal.price,
            companyName: deal.customer.name,
            status: deal.status,
          });
        }
      }
      return newBoard;
    },
  });
}

// const {isSuccess} = useQuery
// watch(isSuccess, (isSuccess) => {
//   if (isSuccess) {
//     isLoading.value = false
//   }
// })
