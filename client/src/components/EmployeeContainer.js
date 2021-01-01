import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Header from "./Header";
import Main from "./Main";
import SearchForm from "./SearchForm";
import MemberList from "./MemberList";
import Footer from "./Footer";
import API from "../utils/API";
import "./style.css";

class EmployeeContainer extends Component {
  state = {
    search: "",
    filter: "",
    members: [],
    results: [],
  };

  // When the component mounts, get a list of random employees and update this.state.employees
  componentDidMount() {
    API.getRandomEmployees()
      .then((res) => {
        this.setState((prevState) => (prevState.members = res.data.results));
        this.setState((prevState) => (prevState.results = res.data.results));
      })
      .catch((err) => console.log(err));
  }

  handleSearchChange = async (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    await this.setState((prevState) => (prevState[name] = value));
    const { search, filter, members } = this.state;
    await this.setState((prevState) => (prevState.results = members));

    const searchList = members
      .filter((item) =>
        filter === ""
          ? true
          : item.gender.toLowerCase().trim() === filter.toLowerCase().trim()
      )
      .filter((item) =>
        search === ""
          ? true
          : item.name.first.toLowerCase().includes(search.toLowerCase())
      );
    this.setState({ results: searchList });
  };

  render() {
    return (
      <Wrapper>
        <Header />
        <Main>
          <SearchForm
            search={this.state.search}
            filter={this.state.filter}
            handleSearchChange={this.handleSearchChange}
          />
          <MemberList results={this.state.results} />
        </Main>
        <Footer />
      </Wrapper>
    );
  }
}

export default EmployeeContainer;
