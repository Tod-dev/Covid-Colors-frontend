export const convertDateToString = (date) => {
  //console.log(date);
  let today = date;
  today.setHours(today.getHours() + 1);
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  let hh = String(today.getHours()).padStart(2, "0");
  let min = String(today.getMinutes()).padStart(2, "0");

  today = dd + "/" + mm + "/" + yyyy + "  " + hh + ":" + min;
  return today;
};
