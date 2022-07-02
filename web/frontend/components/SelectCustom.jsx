import { Select } from "@shopify/polaris";
import { useDispatch, useSelector } from "react-redux";
import { changepositon } from "../store/sliceApp";

export  function SelectCustom(props) {
  const {valuepositioni } = useSelector(state => state.Appslide[0])
  const dispath =useDispatch()
  const handleSelectChange = (value) => 
  { if(props.label.toLowerCase() == 'position')
     {dispath(changepositon(value))}
  };
  
  return (
    <Select
      label={props.label}
      options={props.options}
      onChange={handleSelectChange}
      value={""+valuepositioni}
    />
  );
}