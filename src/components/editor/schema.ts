import { shortAnswer } from "@/components/editor/custom-components/short-answer";
import { longAnswer } from "@/components/editor/custom-components/long-answer";
import { multipleChoice } from "@/components/editor/custom-components/multi-choice";
import { checkbox } from "@/components/editor/custom-components/checkbox";
import { dropDown } from "@/components/editor/custom-components/dropdown";
import { multiSelect } from "@/components/editor/custom-components/multi-select";
import { email } from "@/components/editor/custom-components/email";
import { number } from "@/components/editor/custom-components/number";
import { link } from "@/components/editor/custom-components/link";
import { BlockNoteSchema, defaultBlockSpecs } from "@blocknote/core";

const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...defaultBlockSpecs,
    shortAnswer,
    longAnswer,
    multipleChoice,
    checkbox,
    dropDown,
    multiSelect,
    email,
    number,
    link
  },
});

type schemaType = typeof schema.BlockNoteEditor;

export { schema };
export type { schemaType };
