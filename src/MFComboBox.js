import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function MFComboBox() {
  const [searchTxt, setSearchTxt] = React.useState("");
  const [options, setOptions] = React.useState([]);

  React.useEffect(() => {
    getMutualFundNames(searchTxt);
  }, [searchTxt]);

  const getMutualFundNames = async text => {
    console.log(text);
    const response = await fetch("https://api.mfapi.in/mf/search?q=" + text);
    const mfunds = await response.json();
    console.log(mfunds);
    setOptions(mfunds);
  };
  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 300 }}
      getOptionSelected={(option, value) =>
        option.schemeCode === value.schemeCode
      }
      getOptionLabel={option => option.schemeName}
      options={options}
      fullWidth
      onChange={(e, v, r) => {
        //console.log(e, v, r);
      }}
      onInputChange={(e, v, r) => {
        // console.log(e, v, r);
        setSearchTxt(v);
      }}
      renderInput={params => (
        <TextField
          fullWidth
          {...params}
          label="Mutual Fund"
          InputProps={{
            ...params.InputProps
          }}
        />
      )}
    />
  );
}
