export const selectAllTransactions = state =>
  state.transactions.allTransactions;

export const selectIsLoading = state => state.transactions.isLoading;

export const selectCategories = state => state.transactions.categories;

export const selectIncomeCategoryId = state =>
  state.transactions.categories
    .filter(({ id, name, type }) => name === 'Income')
    .map(({ id }) => console.log(id));
