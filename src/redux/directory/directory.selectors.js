import { createSelector } from 'reselect';

const selectDiretory = state => state.directory;

export const selectDirectorySection = createSelector(
  [selectDiretory],
  directory => directory.sections
)