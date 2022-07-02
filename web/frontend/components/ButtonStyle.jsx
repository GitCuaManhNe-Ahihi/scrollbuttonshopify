import { Card } from "@shopify/polaris";
import { useSelector } from "react-redux";
import { ColorPick } from "./ColorPick";
import { RangeSlide } from "./RangSlide";

export default function ButtonStyle() {
  const {positioni } = useSelector(state => state.Appslide[0])
  const keys = Object.keys(positioni)

  return (
    <Card>
        <Card.Section title="Background Color"> 
            <ColorPick type={0}/>
            <RangeSlide label={"Border Radius"} name={"borderR"}/>
        </Card.Section>
        <Card.Section title="Button Size">
            <RangeSlide label={"Height"} name={"height"}/>
            <RangeSlide label={"Width"} name={"width"}/>
        </Card.Section>
        <Card.Section title="Distance">
            <RangeSlide label={`Distance to ${keys[0]}`} name={`${keys[0]}`}/>
            <RangeSlide label={`Distance to ${keys[1]}`}  name={`${keys[1]}`}/>
        </Card.Section>
    </Card>
  )
}
