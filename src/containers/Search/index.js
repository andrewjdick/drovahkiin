import React, { Component, createRef } from "react";
import { bool } from "prop-types";
import { Filters } from "./Filters";
import { Results } from "./Results";
import { Container } from "./styles";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.scrollTopRef = createRef();
    this.state = {
      location: "London, Uk",
      max_distance: 1000,
      number_of_months: 12,
      number_of_weeks: 52,
      order_by: "price",
      order_direction: "asc",
      page: 1,
      per_page: 15,
      price_min: 100,
      price_max: 2500,
      rolling: false,
      number_of_seats_min: 1,
      number_of_seats_max: 8,
      start_date: "09/09/2018",
      vehicle_type: "Consumer",
      vehicle_make: "Ford"
    };
  }

  handlePageChange = direction => {
    const { page } = this.state;
    this.setState(
      { page: direction === "next" ? page + 1 : page - 1 },
      () => (this.scrollTopRef.current.scrollTop = 0)
    );
  };

  handleFilterChange = ({ key, value }) => {
    this.setState({
      [key]: value,
      page: 1
    });
  };

  render() {
    const { isMobileNavigationOpen } = this.props;
    const {
      vehicle_make,
      price_min,
      price_max,
      transmission,
      max_distance,
      number_of_seats_min,
      number_of_seats_max
    } = this.state;

    return (
      <Container ref={this.scrollTopRef}>
        <Filters
          vehicle_make={vehicle_make}
          price_min={price_min}
          price_max={price_max}
          transmission={transmission}
          max_distance={max_distance}
          number_of_seats_min={number_of_seats_min}
          number_of_seats_max={number_of_seats_max}
          isMobileNavigationOpen={isMobileNavigationOpen}
          onFilterChange={({ key, value }) =>
            this.handleFilterChange({ key, value })
          }
        />

        <Results
          data={this.state}
          onPageChange={direction => this.handlePageChange(direction)}
        />
      </Container>
    );
  }
}

Search.propTypes = {
  isMobileNavigationOpen: bool
};
