import React, { Component, Fragment } from "react";
import { Header } from "components/Header";
import { Results } from "components/Results";
import { Filters } from "components/Filters";
import { AppWrapper, Container, GlobalStyles } from "./styles";

class App extends Component {
  state = {
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

  handlePageChange = direction => {
    const { page } = this.state;
    this.setState({ page: direction === "next" ? page + 1 : page - 1 });
  };

  handleFilterChange = ({ key, value }) => {
    this.setState({ [key]: value });
  };

  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <AppWrapper>
          <Header />
          <Container>
            <Filters
              data={this.state}
              onFilterChange={({ key, value }) =>
                this.handleFilterChange({ key, value })
              }
            />
            <Results
              data={this.state}
              onPageChange={direction => this.handlePageChange(direction)}
            />
          </Container>
        </AppWrapper>
      </Fragment>
    );
  }
}

export default App;
