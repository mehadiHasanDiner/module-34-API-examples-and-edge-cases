const getBidheshini = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((response) => response.json())
    .then((data) => getDat(data));
};

const getDat = (dataS) => {
  const randomData = document.getElementById("random-id");
  //   dataS.results[0].picture.large;
  console.log(dataS.results[0]);
  randomData.innerHTML = `
  <img src="${dataS.results[0].picture.large}" alt="">

  <h3>Name: ${
    dataS.results[0].name.title +
    " " +
    dataS.results[0].name.first +
    " " +
    dataS.results[0].name.last
  }</h3>

  <p>Gender: ${dataS.results[0].gender}</p>
  <p>Email: ${dataS.results[0].email}</p>
  <p>Phone No: ${dataS.results[0].cell}</p>

  `;
};

getBidheshini();
