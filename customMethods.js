export const whenAllDone = (proms) => {
  const values = [];
  return new Promise((resolve, reject) => {
    proms.forEach((item) => {
      item.then((res) => {
        if (!res.ok) {
          values.push(Promise.reject('Network Error'));
        } else {
          values.push(res.json());
        }
        if (values.length === proms.length) {
          resolve(values);
        }
      })
    })
  })
};