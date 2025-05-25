import { Input } from "@/components/ui/input"
import { defaultProps } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";
import { ChangeEvent, useState } from "react";


export const number = createReactBlockSpec(
  {
    type: "number",
    propSchema: {
      textAlignment: defaultProps.textAlignment,
      textColor: defaultProps.textColor,
      question: {
        default:''
      },
      placeholder:{
        default : ''
      }
    },
    content: "inline",
  },
  {
    render: (props) => {
        const [data,setData] = useState('');
        const [question, setQuestion] = useState("");
        const updateInput = (e:ChangeEvent<HTMLInputElement>) => {
            setData(e.target.value);
            props.editor.updateBlock(props.block, {type: "number", props: {placeholder: e.target.value}})
        }
        
      return (
        <div className={"number"}>
        <input
            className="text-xl font-semibold outline-0"
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
            placeholder="Type a Question"
          />
          <Input type="text" onChange={updateInput} value={data}/>
        </div>
      );
    },
  },
);
 