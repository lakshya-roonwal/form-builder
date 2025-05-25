"use client";
import {
  BlockNoteEditor, filterSuggestionItems
} from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import {
  DefaultReactSuggestionItem,
  useCreateBlockNote,
  getDefaultReactSlashMenuItems,
  SuggestionMenuController,
} from "@blocknote/react";
import { schema } from "./schema";

import {
  insertShortAnswer,
  insertLongAnswer,
  insertMultipleChoice,
  insertCheckbox,
  insertDropdown,
  insertMultiselect,
  insertEmail,
  insertNumber,
  insertLink
} from "./slash-menu-items/slash-menu-items";

const getCustomSlashMenuItems = (
  editor: BlockNoteEditor
): DefaultReactSuggestionItem[] => [...getDefaultReactSlashMenuItems(editor)];

const FormBuilder = () => {
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
  return (
    <>
      <BlockNoteView className="w-full h-full" editor={editor}>
        <SuggestionMenuController
          triggerCharacter={"/"}
          getItems={async (query) => {
            const defaultItems = getDefaultReactSlashMenuItems(editor);
            defaultItems.push(
              insertShortAnswer(editor),
              insertLongAnswer(editor),
              insertMultipleChoice(editor),
              insertCheckbox(editor),
              insertDropdown(editor),
              insertMultiselect(editor),
              insertEmail(editor),
              insertNumber(editor),
              insertLink(editor)
            );

            // Returns filtered items based on the query.
            return filterSuggestionItems(defaultItems, query);
          }}
        />
      </BlockNoteView>
      <button
        onClick={() => {
          console.log("editor ", editor.document);
        }}
      >
        export
      </button>
    </>
  );
};

export default FormBuilder;
