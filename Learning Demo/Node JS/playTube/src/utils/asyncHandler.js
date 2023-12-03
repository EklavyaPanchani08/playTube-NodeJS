// const asyncHeander = (requestHandler) => async (req, res) => {
//   try {
//     await requestHandler(req, res);
//   } catch (error) {
//     throw error;
//   }
// };

const asyncHeander = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res)).catch((error) => next(error));
  };
};

export { asyncHeander };
