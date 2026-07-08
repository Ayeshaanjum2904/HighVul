export const groupFilter = (array, property, value) => {
  const filteredGroups = array.filter((item) => {
    const propertyValue = item[property];
    return value.some((v) => v.value === propertyValue);
  });

  return filteredGroups;
};
