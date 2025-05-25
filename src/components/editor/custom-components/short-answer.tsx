import { Input } from "@/components/ui/input";

import { defaultProps } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";
import { ChangeEvent, useState } from "react";

// The Alert block.
export const shortAnswer = createReactBlockSpec(
  {
    type: "shortAnswer",
    propSchema: {
      textAlignment: defaultProps.textAlignment,
      textColor: defaultProps.textColor,
      question: {
        default: "",
      },
      placeholder: {
        default: "",
      },
    },
    content: "none",
  },
  {
    render: (props) => {
      const [data, setData] = useState("");
      const [question, setQuestion] = useState("");
      const updateInput = (e: ChangeEvent<HTMLInputElement>) => {
        setData(e.target.value);
        props.editor.updateBlock(props.block, {
          type: "shortAnswer",
          props: { placeholder: e.target.value },
        });
      };

      return (
        <div className={"short-answer"}>
          <input
            className="text-xl font-semibold outline-0"
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
            placeholder="Type a Question"
          />
          <Input
            type="text"
            name="short-answer"
            placeholder="Type Placeholder text"
            onChange={updateInput}
            value={data}
          />
        </div>
      );
    },
  }
);
