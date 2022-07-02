import { Grid, Heading, TextContainer } from '@shopify/polaris'
import { TabsCustom } from './TabsCustom'

export default function CustomButton() {
    return (
        <div style={{ width: '100%' }}>
            <Grid>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <TextContainer>
                        <Heading>Setting Button</Heading>
                        <p>
                            Change icon, button style
                        </p>
                    </TextContainer>
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <TabsCustom />
                </Grid.Cell>
            </Grid>
        </div>
    )
}
