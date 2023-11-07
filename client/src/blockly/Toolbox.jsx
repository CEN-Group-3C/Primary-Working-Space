import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";

const toolbox = {
  kind: "flyoutToolbox",
  contents: [
    {
      kind: "block",
      type: "controls_if",
    },
    {
      kind: "block",
      type: "controls_repeat_ext",
    },
    {
      kind: "block",
      type: "logic_compare",
    },
    {
      kind: "block",
      type: "math_number",
    },
    {
      kind: "block",
      type: "math_arithmetic",
    },
    {
      kind: "block",
      type: "text",
    },
    {
      kind: "block",
      type: "text_print",
    },
  ],
};

const initialXml =
  '<xml xmlns="https://developers.google.com/blockly/xml"><block type="simplebot" id="gjqjdO;x_.b0m5tTGg-L" x="10" y="10"><value name="botToken"><block type="text" id="A9eL4vg_5TLZhi]HQ3~5"><field name="TEXT">token you get from telegram "@botfather"</field></block></value><statement name="simpleActions"><block type="responceontext" id="ph9h5:`d%[NTM@1nGq2n"><value name="onText"><block type="regexInput" id="C,vEP$oMM6CXFqmfPBI}"><field name="regex">privet</field></block></value><value name="responceText"><block type="text" id="}d5nk?}L)RGHFp_l%?^T"><field name="TEXT">hello</field></block></value></block></statement></block></xml>';

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
