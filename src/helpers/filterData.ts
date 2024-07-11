
export const filterData = (data: any) => {
  return data.items.filter((item: any) => 
    item.volumeInfo && item.volumeInfo.description && item.volumeInfo.imageLinks
  );
};