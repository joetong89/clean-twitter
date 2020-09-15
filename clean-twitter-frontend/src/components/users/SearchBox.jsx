import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { searchUser } from "../../services/userService";
import { withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInputLabel-outlined": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

class SearchBox extends Component {
  state = { searchedUsersResult: [], inputSearchedValue: "" };

  handleOnChange = async ({ currentTarget: search }) => {
    const usersInfo = await searchUser(search.value);
    let searchedUsersResult = usersInfo.map((user) => ({
      handler: user.handler,
      verified: user.verified,
      displayName: user.display_name,
    }));

    this.setState({ searchedUsersResult });
  };

  formatSearchResult = (user) => {
    const returnName = `${user.displayName} @${user.handler}`;
    return user.verified ? `✅ ${returnName}` : returnName;
  };

  render() {
    return (
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={this.state.searchedUsersResult.map((user) =>
          this.formatSearchResult(user)
        )}
        renderInput={(params) => (
          <CssTextField
            {...params}
            style={{ width: "300px", margin: 10 }}
            size="small"
            label="Twitter Handler"
            margin="normal"
            variant="outlined"
            name="searchedHandler"
            onChange={this.handleOnChange}
          />
        )}
      />
    );
  }
}

export default SearchBox;
