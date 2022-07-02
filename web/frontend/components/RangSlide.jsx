import { Card, RangeSlider } from "@shopify/polaris";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changerange } from "../store/sliceApp";

export function RangeSlide(props) {
  const state = useSelector(state => state.Appslide[0])
  const dispath = useDispatch()
  const handleRangeSliderChange = (value) => 
  dispath(changerange({ name: props.name, value }))



  return (
    <Card>
      <RangeSlider
        label={props.label}
        value={state[props.name] || 0}
        onChange={handleRangeSliderChange}
        output
      />
    </Card>
  );
}