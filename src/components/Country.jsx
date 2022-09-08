import React, { Component } from "react";
import axios from "axios";
export default class Country extends Component {
  state = {
    country: {},
  };
  componentDidMount() {
    let name = this.props.data;
    axios
      .get("https://restcountries.com/v3.1/name/" + name + "?fullText=true")
      .then((res) => {
        this.setState({
          country: res.data[0],
        });
      });
  }

  textArea = () => {
    let country = document.getElementById("country");
    let countrs = document.getElementById("countrs");
    setTimeout(() => {
      if (this.state.country.name) {
        let data = this.state.country;
        countrs.innerHTML = "";
        country.innerHTML = `
        <div>
        <div class=card">
          <img
            src="${data.flags.png}"
            class="card-img-top"
            alt=".asdas"
          />
          <div class="card-head">
            <h5 class="card-title">Offical ${data.name.official}</h5>
            <p class="card-text">${(data.name.common, data.capital[0])}</p>
          </div>
          <div class="card-body">
            <div class="translationsContent">
              <div class="mapAndTranslations">
                <div>
                  <h5>Translations</h5>
                </div>
                /
                <div class="mapAndLanguage">
                  ${data.region} ,${data.subregion}
                </div>
              </div>
              <div class="translations">
                <div class="translation">${data.translations.ara.common}</div>
                <div class="translation">${data.translations.bre.common}</div>
                <div class="translation">${data.translations.ces.common}</div>
                <div class="translation">${data.translations.cym.common}</div>
                <div class="translation">${data.translations.deu.common}</div>
                <div class="translation">${data.translations.fra.common}</div>
                <div class="translation">${data.translations.kor.common}</div>
                <div class="translation">${data.translations.jpn.common}</div>
                <div class="translation">${data.translations.hrv.common}</div>
                <div class="translation">${data.translations.hun.common}</div>
                <div class="translation">${data.translations.ita.common}</div>
                <div class="translation">${data.translations.per.common}</div>
                <div class="translation">${data.translations.pol.common}</div>
                <div class="translation">${data.translations.por.common}</div>
                <div class="translation">${data.translations.rus.common}</div>
                <div class="translation">${data.translations.zho.common}</div>
              </div>
            </div>
            <div class="borders">
            <div class="bordersAndMaps">
              <div>
              <h5>Borders</h5>
              </div>
              <div>
                <a href="${data.maps.googleMaps}">Maps</a>
              </div>
            </div>
             <p>${data.borders.slice(0,10)}</p>
            </div>
            <div class="pop">
             population : ${data.population}
            </div>
          </div>
        </div>
      </div>`;
      } else {
        return <div>yok</div>;
      }
    }, 2000);
  };
  render() {
    return (
      <div className="country">
        <div id="countrs">Loadingg.....</div>
        <div id="country">{this.textArea()}</div>
      </div>
    );
  }
}

