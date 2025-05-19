import { BlockNoteEditor, insertOrUpdateBlock } from "@blocknote/core"
import { AArrowDown } from "lucide-react";
import {  Text, TextCursorInput, ListChecks, Check, ChevronDown, ListTree } from "lucide-react";

export const insertShortAnswer = (editor: BlockNoteEditor) => ({
  title: "Short Answer",
  onItemClick: () =>
    insertOrUpdateBlock(editor, { type: "shortAnswer" }),
  aliases: ["short", "text", "shortanswer"],
  group: "Form Elements",
  icon: <TextCursorInput size={18} />,
  subtext: "Single-line input field",
});

export const insertLongAnswer = (editor: BlockNoteEditor) => ({
  title: "Long Answer",
  onItemClick: () =>
    insertOrUpdateBlock(editor, { type: "longAnswer" }),
  aliases: ["long", "textarea", "paragraph"],
  group: "Form Elements",
  icon: <Text size={18} />,
  subtext: "Multi-line text field",
});

export const insertMultipleChoice = (editor: BlockNoteEditor) => ({
  title: "Multiple Choice",
  onItemClick: () =>
    insertOrUpdateBlock(editor, { type: "multipleChoice" }),
  aliases: ["radio", "mcq", "choice"],
  group: "Form Elements",
  icon: <ListChecks size={18} />,
  subtext: "Radio buttons for one selection",
});

export const insertCheckbox = (editor: BlockNoteEditor) => ({
  title: "Checkboxes",
  onItemClick: () =>
    insertOrUpdateBlock(editor, { type: "checkbox" }),
  aliases: ["check", "checkbox", "tick"],
  group: "Form Elements",
  icon: <Check size={18} />,
  subtext: "Multiple checkable options",
});

export const insertDropdown = (editor: BlockNoteEditor) => ({
  title: "Dropdown",
  onItemClick: () =>
    insertOrUpdateBlock(editor, { type: "dropdown" }),
  aliases: ["select", "dropdown"],
  group: "Form Elements",
  icon: <ChevronDown size={18} />,
  subtext: "Select from a list",
});

export const insertMultiselect = (editor: BlockNoteEditor) => ({
  title: "Multi-select",
  onItemClick: () =>
    insertOrUpdateBlock(editor, { type: "multiselect" }),
  aliases: ["multi", "multiselect"],
  group: "Form Elements",
  icon: <ListTree size={18} />,
  subtext: "Select multiple from a list",
});
