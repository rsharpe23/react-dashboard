import { useWorkTypeApi } from 'src/hooks';
import { useDashboardEntry } from '@Dashboard/Entry';

export function useDashboardWorkType(id) {
  return useDashboardEntry(useWorkTypeApi(), id);
}