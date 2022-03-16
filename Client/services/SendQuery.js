const SendQuery = (query, isSqlBtn, isRsBtn) => {
  console.log(query);
  console.log(isSqlBtn);
  console.log(isRsBtn);

  fetch("http://192.168.1.3:5002/request", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
      isSqlBtn: isSqlBtn,
      isRsBtn: isRsBtn,
    }),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);

      if (responseJson.code === 200) {
        // We will displaying the next screen
      } else {
        // We need to display the same screen with the error..
      }
    })
    .catch((error) => {
      console.log("FROM ERROR");
      console.log(error);
    });
};

export default SendQuery;
