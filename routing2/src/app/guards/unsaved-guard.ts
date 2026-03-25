import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivate {
  hasUnsavedChanges: () => boolean;
}

export const unsavedGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component,
  _currentRoute,
  _currentState,
  _nextState
) => {
  if (component.hasUnsavedChanges && component.hasUnsavedChanges()) {
    return confirm('You have unsaved changes. Are you sure you want to leave?');
  }
  return true;
};