export const CreateId = () => {
  var result = '';
  var characters = '0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < 12; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  const newResult =
    result.slice(0, 3) +
    '-' +
    result.slice(3, 6) +
    '-' +
    result.slice(6, 9) +
    '-' +
    result.slice(9, 12);
  return newResult;
};
