import React, { Component } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";
export default class RandomCountries extends Component {
  state = {
    countries: [],
    errorMessage: "",
  };
  componentDidMount() {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (res) {
          this.setState({
            countries: Math.floor(Math.random(res.data.slice(0, 5))),
          });
        }
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      });
  }
  render() {
    const countryList = this.state.countries.map((dat) => {
      return (
        <>
          <CountryCard
            dat={dat}
            key={dat.unNumber}
            ClickHandler={this.props.ClickHandler}
          />
        </>
      );
    });

    return (
      <div>
        {this.state.countries.length === 0 ? (
          <div className="countrList">{this.state.errorMessage}</div>
        ) : (
          <div className="countryList">{countryList}</div>
        )}
      </div>
    );
  }
}
