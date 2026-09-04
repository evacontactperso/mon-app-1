import TableCellContent from "./TableCellContent";

type PricingTableProps = {
  firstColumnLabel?: string;
  columns: string[];
  rows: { label: string; values: string[] }[];
  note?: string;
};

export default function PricingTable({
  firstColumnLabel = "Offre",
  columns,
  rows,
  note,
}: PricingTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200/60 bg-white shadow-sm">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200/60 bg-[#F9F9FB]">
            <th className="px-4 py-4 font-bold text-[#0B0B0B] md:px-6">{firstColumnLabel}</th>
            {columns.map((col) => (
              <th key={col} className="px-4 py-4 font-semibold text-[#515154] md:px-6">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={i % 2 === 0 ? "bg-white" : "bg-[#F9F9FB]/50"}
            >
              <td className="px-4 py-4 font-semibold text-[#0B0B0B] md:px-6">{row.label}</td>
              {row.values.map((val, j) => (
                <td key={j} className="px-4 py-4 align-top text-[#515154] md:px-6">
                  <TableCellContent text={val} bulletClassName="bg-[#6366F1]" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {note && (
        <p className="border-t border-slate-200/60 px-4 py-4 text-xs italic text-[#515154] md:px-6">
          {note}
        </p>
      )}
    </div>
  );
}
