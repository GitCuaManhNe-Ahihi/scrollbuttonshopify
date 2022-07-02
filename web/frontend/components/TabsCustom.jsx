import { Card, Tabs } from "@shopify/polaris";
import { useCallback, useState } from "react";
import ButtonStyle from "./ButtonStyle";
import IconCustom from "./IconCustom";

export function TabsCustom() {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "Button",
      content: "Button Style",
      accessibilityLabel: "Button Style",
      panelID: "Button-Style",
    },
    {
      id: "Icon",
      content: "icon",
      panelID: "accept-icon",
    }
  ];

  return (
    <Card>
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        <Card.Section>
          {
            !selected?<ButtonStyle/>:<IconCustom/>
          }
        </Card.Section>
      </Tabs>
    </Card>
  );
}