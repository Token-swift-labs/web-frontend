export default function timeDiff(date1: Date, date2: Date) {
  var difference = date1.getTime() - date2.getTime();

  var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= daysDifference * 1000 * 60 * 60 * 24;

  var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  difference -= hoursDifference * 1000 * 60 * 60;

  var minutesDifference = Math.floor(difference / 1000 / 60);
  difference -= minutesDifference * 1000 * 60;

  var secondsDifference = Math.floor(difference / 1000);
  return [
    `${
      daysDifference > 0
        ? daysDifference + " days"
        : hoursDifference + ":" + minutesDifference + ":" + secondsDifference
    }`,
    difference,
  ];
}
