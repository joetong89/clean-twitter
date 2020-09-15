import React, { Component } from "react";
import queryString from "query-string";
import { ToastContainer, toast } from "react-toastify";
import Tweets from "./tweets/Tweets";
import { getTweets } from "../services/tweetService";
import User from "./users/User";
import "react-toastify/dist/ReactToastify.css";

class Home extends Component {
  state = {
    tweets: [],
    user: {},
  };

  async componentDidMount() {
    const { handler } = this.props.match.params;
    const { searchedHandler } = queryString.parse(this.props.location.search);
    const userHanlderfromSearch =
      searchedHandler &&
      searchedHandler.slice(searchedHandler.indexOf("@") + 1);

    const userHandler = handler || userHanlderfromSearch;

    const { data } = await getTweets(userHandler);

    if (!data.length) {
      toast.error(`User ${userHandler} does not exist!`, {
        position: "top-center",
      });

      window.setTimeout(this.props.history.goBack, 5000);
    } else {
      this.setState({ tweets: data, user: data[0].user });
    }
  }

  render() {
    const { tweets, user } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-7 ">
            <h3 className="text-center">{user.display_name}</h3>
            <Tweets tweets={tweets} />
          </div>
          <div className="col-md-12 col-lg-5">
            <User user={user} />
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default Home;
