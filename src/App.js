import React from "react";

import { Cards, Charts, CountryPicker } from "./components";

import styles from "./App.module.css";
import { fetchData } from "./api";

import coronaImage from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    // console.log(fetchedData);
  }

  handleCountryChange = async (country) => {
    //fetch data
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
    //set the state
  };
  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
