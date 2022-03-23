const SendQuery = (query, isSqlBtn, isRsBtn) => {
  console.log(query);
  console.log(isSqlBtn);
  console.log(isRsBtn);

  fetch("http://192.168.1.248:5002/request", {
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
    .then((response) => 
      // console.log(response)
      response.json()
      // console.log(code);
    )
    .then((responseJson) => {
      // console.log(responseJson);
      // console.log(code);
      return responseJson;
      // if (responseJson.Status === 200) {
      //   // We will displaying the next screen
      //   // alert(responseJson.Response);
      //   return responseJson.Response;
      // } else {
      //   // We need to display the same screen with the error..
      //   alert(responseJson.Response);
      // }
    })
    .catch((error) => {
      console.log("FROM ERROR");
      console.log(error);
    });
};

export default SendQuery;
