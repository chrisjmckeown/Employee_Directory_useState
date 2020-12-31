import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Header from "./Header";
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
        console.log(res.data.results);
        this.setState({ members: res.data.results });
        this.setState({ results: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  handleSearchChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
    const { search, filter, members } = this.state;
    this.setState({ results: members });

    console.log("search", this.state.search);
    console.log("filter", this.state.filter);

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
      <div>
        <Wrapper>
          <Header />
          <SearchForm
            search={this.state.search}
            filter={this.state.filter}
            handleSearchChange={this.handleSearchChange}
          />
          <MemberList members={this.state.results} />
          <Footer />
        </Wrapper>
      </div>
    );
  }
}

export default EmployeeContainer;
