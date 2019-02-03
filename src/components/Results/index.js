import React from "react";
import { fetchRequest } from "api/fetchRequest";
import { Result } from "components/Result";
import {
  ResultsAvailable,
  ResultsWrapper,
  ResultWrapper,
  PaginationText,
  PaginationButton,
  Pagination
} from "./styles";

export class Results extends React.Component {
  state = {
    metadata: {},
    data: [],
    isLoading: true
  };

  componentDidMount() {
    const { data } = this.props;
    this.getFilteredVehicles(data);
  }

  componentDidUpdate(prevProps) {
    const { data } = this.props;

    if (prevProps.data !== data) {
      this.setState({ isLoading: true }, () => this.getFilteredVehicles(data));
    }
  }

  getFilteredVehicles = vehicleData =>
    fetchRequest({
      url: "web/vehicles",
      method: "POST",
      body: vehicleData
    }).then(({ metadata, data }) =>
      this.setState({ metadata, data, isLoading: false })
    );

  render() {
    const { onPageChange } = this.props;
    const {
      data,
      metadata: { total_count, per_page, page },
      isLoading
    } = this.state;

    const totalPages = Math.ceil(total_count / per_page);
    const isPrevDisabled = page === 1;
    const isNextDisabled = page === totalPages;
    const isEmptyResults = total_count === 0;

    return (
      <ResultsWrapper>
        <ResultsAvailable>
          {isLoading
            ? "Searching for cars..."
            : isEmptyResults
            ? "No cars available"
            : `${total_count} cars available`}
        </ResultsAvailable>

        <ResultWrapper isLoading={isLoading}>
          {data.map((result, index) => (
            <Result data={result} key={index} />
          ))}
        </ResultWrapper>

        {!isLoading && totalPages > 1 && (
          <Pagination>
            <PaginationText>
              Viewing page {page} of {totalPages}
            </PaginationText>
            <PaginationButton
              type="button"
              onClick={() => onPageChange("prev")}
              value="Previous"
              disabled={isPrevDisabled}
            />
            <PaginationButton
              type="button"
              onClick={() => onPageChange("next")}
              value="Next"
              disabled={isNextDisabled}
            />
          </Pagination>
        )}
      </ResultsWrapper>
    );
  }
}
