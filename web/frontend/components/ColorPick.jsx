import { ColorPicker } from "@shopify/polaris";
import { useDispatch, useSelector } from 'react-redux';
import { changecolorbg, changecolor } from "../store/sliceApp";

export function ColorPick(props) {
  const { background, color } = useSelector(state => state.Appslide[0])
  const dispath = useDispatch()
  const { type } = props

  return <>
    <input type={"color"} onChange={(e) => dispath(!type ? changecolorbg(e.target.value) : changecolor(e.target.value))}
      value={!type ? background : color} style={{ height: "50px", width: "50px" }} />
  </>;
}