import { insertOrUpdateBlock } from "@blocknote/core"
import { AArrowDown } from "lucide-react";
import {  Text, TextCursorInput, ListChecks, Check, ChevronDown, ListTree, Mail } from "lucide-react";
import {schemaType} from '@/components/editor/schema'

export const insertShortAnswer = (editor: schemaType) => ({
  title: "Short Answer",
  onItemClick: () =>
    insertOrUpdateBlock(editor, { type: "shortAnswer" }),
  aliases: ["short", "text", "shortanswer"],
  group: "Form Elements",
  icon: <TextCursorInput size={18} />,
  subtext: "Single-line input field",
});

export const insertLongAnswer = (editor: schemaType) => ({
  title: "Long Answer",
  onItemClick: () =>
    insertOrUpdateBlock(editor, { type: "longAnswer" }),
  aliases: ["long", "textarea", "paragraph"],
  group: "Form Elements",
  icon: <Text size={18} />,
  subtext: "Multi-line text field",
});

export const insertMultipleChoice = (editor: schemaType) => ({
  title: "Multiple Choice",
  onItemClick: () =>
    insertOrUpdateBlock(editor, { type: "multipleChoice" }),
  aliases: ["radio", "mcq", "choice"],
  group: "Form Elements",
  icon: <ListChecks size={18} />,
  subtext: "Radio buttons for one selection",
});

export const insertCheckbox = (editor: schemaType) => ({
  title: "Checkboxes",
  onItemClick: () =>
    insertOrUpdateBlock(editor, { type: "checkbox" }),
  aliases: ["check", "checkbox", "tick"],
  group: "Form Elements",
  icon: <Check size={18} />,
  subtext: "Multiple checkable options",
});

export const insertDropdown = (editor: schemaType) => ({
  title: "Dropdown",
  onItemClick: () =>
    insertOrUpdateBlock(editor, { type: "dropDown" }),
  aliases: ["select", "dropdown"],
  group: "Form Elements",
  icon: <ChevronDown size={18} />,
  subtext: "Select from a list",
});

export const insertMultiselect = (editor: schemaType) => ({
  title: "Multi-select",
  onItemClick: () =>
    insertOrUpdateBlock(editor, { type: "multiSelect" }),
  aliases: ["multi", "multiselect"],
  group: "Form Elements",
  icon: <ListTree size={18} />,
  subtext: "Select multiple from a list",
});


export const insertEmail = (editor: schemaType) => ({
  title: "Email",
  onItemClick: () =>
    insertOrUpdateBlock(editor, { type: "email" }),
  aliases: ["mail", "email"],
  group: "Form Elements",
  icon: <Mail size={18} />,
  subtext: "Email Feild",
});

export const insertNumber = (editor: schemaType) => ({
  title: "Number",
  onItemClick: () =>
    insertOrUpdateBlock(editor, { type: "number" }),
  aliases: ["nm", "number"],
  group: "Form Elements",
  icon: <Mail size={18} />,
  subtext: "Email Feild",
});

export const insertLink = (editor: schemaType) => ({
  title: "Link",
  onItemClick: () =>
    insertOrUpdateBlock(editor, { type: "link" }),
  aliases: ["hyperlink", "link"],
  group: "Form Elements",
  icon: <Mail size={18} />,
  subtext: "Insert a link",
});
