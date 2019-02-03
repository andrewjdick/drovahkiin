import React, { Component, Fragment } from "react";
import { Header } from "components/Header";
import { Results } from "components/Results";
import { Filters } from "components/Filters";
import { AppWrapper, Container, GlobalStyles } from "./styles";

class App extends Component {
  state = {
    filters: {
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
    },
    isMobileNavigationOpen: false
  };

  handlePageChange = direction => {
    const { filters } = this.state;
    const { page } = filters;

    this.setState({
      ...this.state,
      filters: {
        ...filters,
        page: direction === "next" ? page + 1 : page - 1
      }
    });
  };

  handleFilterChange = ({ key, value }) => {
    const { filters } = this.state;
    this.setState({
      ...this.state,
      filters: {
        ...filters,
        [key]: value,
        page: 1
      }
    });
  };

  handleMobileNavigationClick = () => {
    const { isMobileNavigationOpen } = this.state;
    this.setState({ isMobileNavigationOpen: !isMobileNavigationOpen });
  };

  render() {
    const { isMobileNavigationOpen } = this.state;
    return (
      <Fragment>
        <GlobalStyles />
        <AppWrapper>
          <Header
            isMobileNavigationOpen={isMobileNavigationOpen}
            onMobileNavigationClick={this.handleMobileNavigationClick}
          />
          <Container>
            <Filters
              data={this.state.filters}
              isMobileNavigationOpen={isMobileNavigationOpen}
              onFilterChange={({ key, value }) =>
                this.handleFilterChange({ key, value })
              }
            />

            <Results
              data={this.state.filters}
              onPageChange={direction => this.handlePageChange(direction)}
            />
          </Container>
        </AppWrapper>
      </Fragment>
    );
  }
}

export default App;
