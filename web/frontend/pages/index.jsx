import { TitleBar } from "@shopify/app-bridge-react";
import {
  Layout, Page
} from "@shopify/polaris";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { SCRButton, Setting } from "../components";
import CustomButton from "../components/CustomButton";
import { setstate } from "../store/sliceApp";

export default function HomePage() {
  const state = useSelector(state => state.Appslide)
  const dispath = useDispatch()
  const onSave = () => {
    localStorage.setItem("state",JSON.stringify( state))
    
  }
  useLayoutEffect(()=>{
      const stateLocal = JSON.parse(localStorage.getItem("state"))
      if(stateLocal)
      {
        dispath(setstate(stateLocal))
      }
  },[])
  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      <Page narrowWidth >
        <TitleBar title="Button Scroll" primaryAction={null} />
        <Layout>
          <Layout.Section>
            <Setting />
          </Layout.Section>
          <Layout.Section>
            <CustomButton />
          </Layout.Section>
          <Layout.Section>
          <button style={{
             background: 'green', color: 'white',
             height: '50px', width: '200px',
             borderRadius:'10px',
             border: "none",
             marginLeft: '350px',
             fontSize:'18px',
             fontWeight:'bold',
             cursor: 'pointer'
          }}
          onClick = {()=>onSave()}
          >
            Save
          </button>
          </Layout.Section>
        </Layout>
        <SCRButton />
      </Page>
    </div>

  );
}
