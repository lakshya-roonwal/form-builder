"use client";
import { checkboxOption } from "@/types/form/FormElements";
import { useState } from "react";


import { defaultProps } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";

export const checkbox = createReactBlockSpec(
  {
    type: "checkbox",
    propSchema: {
      textAlignment: defaultProps.textAlignment,
      textColor: defaultProps.textColor,
      text: {
        default: "",
      },
    },
    content: "inline",
  },
  {
    render: (props) => {
      const [question, setQuestion] = useState("");
      const [options, setOptions] = useState<checkboxOption[]>([]);

      const addOption = () => {
        const newOption = {
          id: new Date().toString(),
          value: "",
        };
        setOptions((prev) => {
          return [...prev, newOption];
        });
      };

      const editOption = (newValue: string, id: string) => {
        const newOptions = options.map((option) => {
          if (option.id === id) {
            return { value: newValue, id: option.id };
          } else {
            return option;
          }
        });
        setOptions(newOptions);
      };

      return (
        <>
          <input
            className="text-xl font-semibold outline-0"
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
            placeholder="Type a Question"
          />
          {/* TODO (STAGE 2) : add keyboard action for enter and del in options */}
          <div className="flex flex-col gap-2">
            {options.map((option, index) => {
              return (
                <div key={option.id}>
                  <input
                    className="text-base font-medium outline-0"
                    onChange={(e) => editOption(e.target.value, option.id)}
                    value={option.value}
                    placeholder={`Option ${index + 1}`}
                  />
                </div>
              );
            })}
          </div>
          <p className="text-gray-300 cursor-pointer my-2" onClick={addOption}>
            Add Option
          </p>
        </>
      );
    },
  }
);
