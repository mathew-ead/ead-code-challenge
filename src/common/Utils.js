export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const calculateDiff = (date1, date2) => {
  let currentDate = new Date(date2);
  date1 = new Date(date1);
  return Math.floor(
    (Date.UTC(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    ) -
      Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())) /
    (1000 * 60 * 60 * 24)
  );
};

export const checkStatus = (rejectedAt, confirmedAt) => {
  if (rejectedAt) {
    return "Rejected"
  } else if(confirmedAt) {
    return "Confirmed"
  } else {
    return "Requested"
  }
};