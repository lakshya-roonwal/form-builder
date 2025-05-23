'use client'
import { BlockNoteEditor, BlockNoteSchema, defaultBlockSpecs, filterSuggestionItems, insertOrUpdateBlock, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { DefaultReactSuggestionItem, useCreateBlockNote, getDefaultReactSlashMenuItems, SuggestionMenuController } from "@blocknote/react";
import { shortAnswer } from "@/components/editor/custom-components/short-answer";
import { longAnswer } from "@/components/editor/custom-components/long-answer";
import { multipleChoice } from "@/components/editor/custom-components/multi-choice";
import { checkbox } from "@/components/editor/custom-components/checkbox";
import { dropDown } from "@/components/editor/custom-components/dropdown";
import { multiSelect } from "@/components/editor/custom-components/multi-select";
import { AArrowDown } from 'lucide-react';
import { insertShortAnswer,
  insertLongAnswer,
  insertMultipleChoice,
  insertCheckbox,
  insertDropdown,
  insertMultiselect } from "./slash-menu-items/slash-menu-items";



// List containing all default Slash Menu Items, as well as our custom one.
const getCustomSlashMenuItems = (
  editor: BlockNoteEditor,
): DefaultReactSuggestionItem[] => [
  ...getDefaultReactSlashMenuItems(editor),
  insertShortAnswer(editor),
  insertLongAnswer(editor),
  insertMultipleChoice(editor),
  insertCheckbox(editor),
  insertDropdown(editor),
  insertMultiselect(editor)
];

const FormBuilder = () => {
    const schema = BlockNoteSchema.create({
        blockSpecs: {
          ...defaultBlockSpecs,
          shortAnswer,
          longAnswer,
          multipleChoice,
          checkbox,
          dropDown,
          multiSelect
        },
      });
      const editor = useCreateBlockNote({
        schema,
        initialContent: [
          {
            type: "paragraph",
            content: "Welcome to this demo!",
          },
          {
            type: "shortAnswer",
          },
          {
            type: "longAnswer",
            content: "This is a long answer block",
          },
          {
            type: "multiSelect",
          },
          {
            type: "paragraph",
            content: "Click the '!' icon to change the alert type",
          },
          {
            type: "paragraph",
          },
        ],
      });

      console.log("🚀 ~ FormBuilder ~ editor.document:", editor.document)
    // Renders the editor instance using a React component.
    return (
    <><BlockNoteView className="w-full h-full" editor={editor}>
            <SuggestionMenuController
        triggerCharacter={"/"}
        // Replaces the default Slash Menu items with our custom ones.
        getItems={async (query) =>
          filterSuggestionItems(getCustomSlashMenuItems(editor), query)
        }
      />
    </BlockNoteView>
    <button onClick={()=>{console.log('editor ',editor.document)}}>export</button>
    </>
    );
}   

export default FormBuilder;