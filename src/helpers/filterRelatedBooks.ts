const predefinedCategories = [
  'General', 'Philosophy', 'Classics', 'Art', 'Fiction', 'Literature',
  'Political', 'Politic', 'Politics', 'Policy', 'Romance', '', ' '
];

export const FilteredRelatedCategories = (arr: string[], fn: (categories: string[]) => void) => {
  let find = arr.find((element: string) => predefinedCategories.includes(element.split(' / ')[0]));
  let category = find ? find.split(' / ')[0] : null;
  fn(category ? [category] : []);
};