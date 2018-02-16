const findObjectIndexById = function(id, list) {
  return list.map(function(obj){ return obj.id; }).indexOf(id);
};

const removeObjectByIndex = function(index, list) {
  list.splice(index, 1);
  return list;
};

const filterObjectsByText = function(query, list) {
  return list.filter(function(obj){ return ~obj.text.indexOf(query); });
};

export { findObjectIndexById, removeObjectByIndex, filterObjectsByText };
