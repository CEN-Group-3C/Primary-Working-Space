import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import { toolbox } from "./config";
import { initialXml } from "./initialXml";

export function Toolbox() {
  const [xml, setXml] = useState(initialXml);

  return (
    <BlocklyWorkspace
      className="width-100" // you can use whatever classes are appropriate for your app's CSS
      toolboxConfiguration={toolbox} // this must be a JSON toolbox definition
      initialXml={xml}
      onXmlChange={setXml}
    />
  );
}
