const allCountriesData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => loadCountry(data));
};

const loadCountry = (countries) => {
  console.log(countries.length);
  const countrySection = document.getElementById("countries-info");
  const countryTotal = document.getElementById("total-country");
  countryTotal.innerHTML = countries.length;

  countries.forEach((element) => {
    console.log(element);
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
    <h3>Name: ${element.name.common}</h3>
    <h4>Capital Name: ${
      element.capital ? element.capital[0] : "No Capital"
    }</h4>
    <button onclick=countryDetailInfo('${element.cca2}')>Details</button>

    `;
    countrySection.appendChild(countryDiv);
  });
};

allCountriesData();

const countryDetailInfo = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => showCountry(data));
};

const showCountry = (singleCountry) => {
  //   console.log(singleCountry);
  const countryDetail = document.getElementById("country-detail");
  countryDetail.innerHTML = `
  <h4>Country Name: ${singleCountry[0].name.common}</h4>
  <img src="${singleCountry[0].flags.png}"></img>
  `;
};
