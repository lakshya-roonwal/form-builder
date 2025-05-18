import { Input } from "@/components/ui/input"




import { defaultProps } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";
import { ChangeEvent, useState } from "react";

 
 
// The Alert block.
export const input = createReactBlockSpec(
  {
    type: "input",
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
        const [data,setData] = useState('something');
        const updateInput = (e:ChangeEvent<HTMLInputElement >) => {
            setData(e.target.value);
            props.editor.updateBlock(props.block, {type: "input", props: {text: e.target.value}})
        }
        
      return (
        <div className={"short-answer"}>
          {/*Icon which opens a menu to choose the Alert type*/}
          <Input onChange={updateInput} value={data}/>
        </div>
      );
    },
  },
);
 