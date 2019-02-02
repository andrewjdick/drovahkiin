import React from "react";
import { fetchRequest } from "api/fetchRequest";
import { ResultsWrapper, Result } from "./styles";

export class Results extends React.Component {
  state = {
    metadata: {},
    data: []
  };

  componentDidMount() {
    const { data } = this.props;
    this.getFilteredVehicles(data);
  }

  componentDidUpdate(prevProps) {
    const { data } = this.props;
    if (prevProps.data !== data) {
      this.getFilteredVehicles(data);
    }
  }

  getFilteredVehicles = vehicleData =>
    fetchRequest({
      url: "web/vehicles",
      method: "POST",
      body: vehicleData
    }).then(response => {
      console.log(response);
      return this.setState({
        metadata: response.metadata,
        data: response.data
      });
    });

  render() {
    const { onPageChange } = this.props;
    const { data } = this.state;

    return (
      <ResultsWrapper>
        <Result>{JSON.stringify(data)}</Result>
        <input
          type="button"
          onClick={() => onPageChange("prev")}
          value="Previous"
        />
        <input
          type="button"
          onClick={() => onPageChange("next")}
          value="Next"
        />
      </ResultsWrapper>
    );
  }
}
