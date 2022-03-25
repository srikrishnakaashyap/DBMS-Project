const SendQuery = (query, database, setData, setCol, setTime) => {
  console.log(query);
  // console.log(isSqlBtn);
  // console.log(isRsBtn);

  fetch("http://192.168.1.248:5002/request", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
        isSqlBtn: database=="MySQL"?true:false,
        isRsBtn: database=="RDS"?true:false,
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
        // return responseJson;
        if (responseJson.Status === 200) {
          // console.log(responseJson.Response);
          let data = responseJson.Response;
          let cols = responseJson.Header;
          // return responseJson;
          setData(data);
          setCol(cols);
          setTime(responseJson.ElapsedTime);
        } else {
          // We need to display the same screen with the error..
          alert(responseJson.Response);
        }
      })
      .catch((error) => {
        console.log("FROM ERROR");
        console.log(error);
      });
};

export default SendQuery;
