import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";




import { defaultProps } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";
import { ChangeEvent, useState } from "react";

 
 
// The Alert block.
export const longAnswer = createReactBlockSpec(
  {
    type: "longAnswer",
    propSchema: {
      textAlignment: defaultProps.textAlignment,
      textColor: defaultProps.textColor,
      text:{
        default : ''
      }
      
    },
    content: "inline",
  },
  {
    render: (props) => {
        console.log("🚀 ~ props:", props)
        const [data,setData] = useState(props.block.content[0].text);
        const updateInput = (e:ChangeEvent<HTMLTextAreaElement >) => {
            setData(e.target.value);
            props.editor.updateBlock(props.block, {type: "longAnswer", props: {text: e.target.value}})
        }
        
      return (
        <div className={"short-answer"}>
          <Textarea onChange={updateInput} value={data}/>
        </div>
      );
    },
  },
);
 