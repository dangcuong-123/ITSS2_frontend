export default function transportLists(location) {
  var hasTrain = location.train;
  var hasCar = location.car;
  var hasShip = location.ship;
  var hasMotorbike = location.motorbike;

  var result = convertToString(hasTrain, hasCar, hasShip, hasMotorbike);
  return result;
}

const convertToString = (hasTrain, hasCar, hasShip, hasMotorbike) => {
  var list = [];
  if (hasTrain === 1) {
    list.push("Tàu hỏa");
  }
  if (hasCar === 1) {
    list.push("Ô tô");
  }
  if (hasShip === 1) {
    list.push("Tàu thủy");
  }
  if (hasMotorbike === 1) {
    list.push("Xe máy");
  }
  var result = list.join("/");
  return result;
};
