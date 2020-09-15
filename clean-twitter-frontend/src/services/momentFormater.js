import moment from "moment";

export const getRelativeTime = (date) => {
  return moment(new Date(date)).fromNow();
};

export const getShortDate = (date) => {
  return moment(new Date(date)).format("MMMM YYYY");
};
