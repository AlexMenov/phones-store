import uniqid from "uniqid";

export const generatedId = () => {
  const id = uniqid();
  const randomNumber = Math.floor(Math.random() * 10000);
  const generatedId = id.slice(0, 6) + randomNumber.toString().padStart(4, "0");
  return generatedId;
};
