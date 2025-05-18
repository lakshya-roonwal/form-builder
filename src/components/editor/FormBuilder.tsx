'use client'
import { BlockNoteEditor, BlockNoteSchema, defaultBlockSpecs, filterSuggestionItems, insertOrUpdateBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { DefaultReactSuggestionItem, useCreateBlockNote, getDefaultReactSlashMenuItems, SuggestionMenuController } from "@blocknote/react";
import { input } from "@/components/editor/custom-components/short-answer";
import { AArrowDown } from 'lucide-react';

// Custom Slash Menu item to insert a block after the current one.
const insertHelloWorldItem = (editor: BlockNoteEditor) => ({
  title: "Input ",
  onItemClick: () =>
    insertOrUpdateBlock(editor, {
      type: "input",
    }),
  aliases: ["input", "in"],
  group: "Other",
  icon: <AArrowDown size={18} />,
  subtext: "Something to add",
});
 
// List containing all default Slash Menu Items, as well as our custom one.
const getCustomSlashMenuItems = (
  editor: BlockNoteEditor,
): DefaultReactSuggestionItem[] => [
  ...getDefaultReactSlashMenuItems(editor),
  insertHelloWorldItem(editor),
];

const FormBuilder = () => {
    const schema = BlockNoteSchema.create({
        blockSpecs: {
          // Adds all default blocks.
          ...defaultBlockSpecs,
          // Adds the Alert block.
          input: input,
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
            type: "input",
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
 
    // Renders the editor instance using a React component.
    return <BlockNoteView className="w-full h-full" editor={editor}>
            <SuggestionMenuController
        triggerCharacter={"/"}
        // Replaces the default Slash Menu items with our custom ones.
        getItems={async (query) =>
          filterSuggestionItems(getCustomSlashMenuItems(editor), query)
        }
      />
    </BlockNoteView>;
}   

export default FormBuilder;