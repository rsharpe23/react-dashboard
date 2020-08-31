import { useWorkApi } from 'src/hooks';
import { useDashboardEntry } from '@Dashboard/Entry';

export function useDashboardWork(id) {
  return useDashboardEntry(useWorkApi(), id);
}