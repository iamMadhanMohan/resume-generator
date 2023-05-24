const dateConverter = (date) => {
  const monthNumber = date.slice(5);
  const year = date.slice(0, 4);

  switch (monthNumber) {
    case "01":
      return "jan " + year;
    case "02":
      return "feb " + year;
    case "03":
      return "mar " + year;
    case "04":
      return "apr " + year;
    case "05":
      return "may " + year;
    case "06":
      return "jun " + year;
    case "07":
      return "jul " + year;
    case "08":
      return "aug " + year;
    case "09":
      return "sep " + year;
    case "10":
      return "oct " + year;
    case "11":
      return "nov " + year;
    case "12":
      return "dec " + year;
    default:
      return "present";
  }
};

export default dateConverter;
