import absences from "./absences.json";
import members from "./members.json";

const mergeArrays = (arr1 = [], arr2 = []) => {
  let res = [];
  res = arr1.map((obj) => {
    const index = arr2.findIndex((el) => el["userId"] == obj["userId"]);
    const { image } = index !== -1 ? arr2[index] : {};
    const { name } = index !== -1 ? arr2[index] : {};
    return {
      ...obj,
      image,
      name,
    };
  });
  return res;
};

export const mergedObj = mergeArrays(absences.payload, members.payload);
