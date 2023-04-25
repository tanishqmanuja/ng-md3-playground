import {DestroyRef, inject} from "@angular/core";
import {Subject} from "rxjs";

export function useOnDestroy() {
  const onDestroy$ = new Subject<void>();
  const destroyRef = inject(DestroyRef);

  destroyRef.onDestroy(() => {
    onDestroy$.next(void 0);
    onDestroy$.complete();
  })

  return onDestroy$;
}