import React, { Component } from "react";
import { Header } from "components/Header";
import { Search } from "containers/Search";
import { AppWrapper, GlobalStyles } from "./styles";

class App extends Component {
  state = {
    isMobileNavigationOpen: false
  };

  handleMobileNavigationClick = () => {
    const { isMobileNavigationOpen } = this.state;
    this.setState({ isMobileNavigationOpen: !isMobileNavigationOpen });
  };

  render() {
    const { isMobileNavigationOpen } = this.state;
    return (
      <AppWrapper>
        <GlobalStyles />

        <Header
          isMobileNavigationOpen={isMobileNavigationOpen}
          onMobileNavigationClick={this.handleMobileNavigationClick}
        />

        <Search isMobileNavigationOpen={isMobileNavigationOpen} />
      </AppWrapper>
    );
  }
}

export default App;
