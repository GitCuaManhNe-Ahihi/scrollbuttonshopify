import { Grid, Heading, TextContainer } from "@shopify/polaris";
import { SelectCustom } from "./SelectCustom";


const options = [
    { label: "Button", value: "0" },
  ];
  const optionsposition = [
    { label: "bottom right", value:"0" },
    { label: "bottom left", value: "1" },
    { label: "top right", value: "2" },
    { label: "top left", value: "3" }
  ];
export function Setting() {
    return (
        <div style={{ width: '100%' }}>
            <Grid>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <TextContainer>
                        <Heading>Setting Button</Heading>
                        <p>
                            Change type and position button
                        </p>
                    </TextContainer>
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <SelectCustom label={"Type"} options={options}/>
                <SelectCustom label={"Position"} options={optionsposition}/>
                </Grid.Cell>
            </Grid>
        </div>
    )
}
