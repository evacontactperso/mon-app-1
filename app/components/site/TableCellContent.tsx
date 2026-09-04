type ParsedCell =
  | { type: "plain"; text: string }
  | { type: "list"; items: string[] }
  | { type: "intro-list"; intro: string; items: string[] };

function splitWithDelimiter(text: string, regex: RegExp, punct: "." | "?"): string[] {
  const parts = text.split(regex);
  if (parts.length <= 1) return [text];

  return parts
    .map((part, i) => {
      const trimmed = part.trim();
      if (!trimmed) return null;
      if (i < parts.length - 1 && !trimmed.endsWith(punct)) {
        return trimmed + punct;
      }
      return trimmed;
    })
    .filter((part): part is string => Boolean(part));
}

export function parseTableCellContent(text: string): ParsedCell {
  const trimmed = text.trim();
  if (!trimmed) return { type: "plain", text: "" };

  const colonIdx = trimmed.indexOf(":");
  if (colonIdx > -1) {
    const intro = trimmed.slice(0, colonIdx + 1).trim();
    const afterColon = trimmed.slice(colonIdx + 1).trim();
    const listItems = afterColon
      .split(/,\s+/)
      .map((item) => item.trim())
      .filter(Boolean);

    if (listItems.length > 1) {
      return { type: "intro-list", intro, items: listItems };
    }
  }

  const periodParts = splitWithDelimiter(trimmed, /\.\s+/, ".");
  if (periodParts.length > 1) {
    return { type: "list", items: periodParts };
  }

  const questionParts = splitWithDelimiter(trimmed, /\?\s+/, "?");
  if (questionParts.length > 1) {
    return { type: "list", items: questionParts };
  }

  const commaParts = trimmed
    .split(/,\s+/)
    .map((item) => item.trim())
    .filter(Boolean);

  if (commaParts.length > 1 && commaParts.every((item) => item.length <= 80)) {
    return { type: "list", items: commaParts };
  }

  return { type: "plain", text: trimmed };
}

function renderHighlightedText(text: string, emphasisClassName?: string) {
  if (!emphasisClassName || !text.includes("*")) {
    return text;
  }

  const parts = text.split(/(\*[^*]+\*)/g).filter((part) => part !== "");

  return parts.map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return (
        <strong key={index} className={`${emphasisClassName} whitespace-normal`}>
          {part.slice(1, -1)}
        </strong>
      );
    }

    return (
      <span key={index} className="whitespace-pre-wrap">
        {part}
      </span>
    );
  });
}

function BulletList({
  items,
  bulletClassName = "bg-[#6366F1]",
  emphasisClassName,
}: {
  items: string[];
  bulletClassName?: string;
  emphasisClassName?: string;
}) {
  return (
    <ul className="w-full space-y-2">
      {items.map((item, index) => (
        <li key={`${index}-${item}`} className="flex items-start gap-2.5">
          <span
            className={`mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full ${bulletClassName}`}
            aria-hidden
          />
          <span className="min-w-0 flex-1 leading-relaxed">
            {renderHighlightedText(item, emphasisClassName)}
          </span>
        </li>
      ))}
    </ul>
  );
}

type TableCellContentProps = {
  text: string;
  bulletClassName?: string;
  emphasisClassName?: string;
  forceList?: boolean;
};

export default function TableCellContent({
  text,
  bulletClassName,
  emphasisClassName,
  forceList = false,
}: TableCellContentProps) {
  const parsed = parseTableCellContent(text);

  if (parsed.type === "plain") {
    if (forceList) {
      return (
        <BulletList
          items={[parsed.text]}
          bulletClassName={bulletClassName}
          emphasisClassName={emphasisClassName}
        />
      );
    }
    return <>{renderHighlightedText(parsed.text, emphasisClassName)}</>;
  }

  if (parsed.type === "intro-list") {
    return (
      <div className="space-y-2">
        <p>{renderHighlightedText(parsed.intro, emphasisClassName)}</p>
        <BulletList
          items={parsed.items}
          bulletClassName={bulletClassName}
          emphasisClassName={emphasisClassName}
        />
      </div>
    );
  }

  return (
    <BulletList
      items={parsed.items}
      bulletClassName={bulletClassName}
      emphasisClassName={emphasisClassName}
    />
  );
}
