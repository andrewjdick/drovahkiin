import React from "react";
import { fetchRequest } from "api/fetchRequest";
import { Result } from "components/Result";
import {
  ResultsWrapper,
  ResultWrapper,
  PaginationButton,
  Pagination
} from "./styles";

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
    }).then(({ metadata, data }) =>
      this.setState({
        metadata: metadata,
        data: data
      })
    );

  render() {
    const { onPageChange } = this.props;
    const { data } = this.state;

    return (
      <ResultsWrapper>
        <ResultWrapper>
          {data.map((result, index) => {
            console.log(result);
            return <Result data={result} key={index} />;
          })}
        </ResultWrapper>
        <Pagination>
          <PaginationButton
            type="button"
            onClick={() => onPageChange("prev")}
            value="Previous"
          />
          <PaginationButton
            type="button"
            onClick={() => onPageChange("next")}
            value="Next"
          />
        </Pagination>
      </ResultsWrapper>
    );
  }
}
