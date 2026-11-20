import { FilterDropdown } from '@/components/ui/filter-dropdown';

const toTitleCase = (month: string) =>
    month.toLowerCase().replace(/^\p{L}/u, (c) => c.toUpperCase());

type MonthFilterProps = {
    value: string;
    options: string[];
    onValueChange: (value: string) => void;
};

export function MonthFilter({
    value,
    options,
    onValueChange,
}: MonthFilterProps) {
    if (options.length < 2) {
        return null;
    }

    return (
        <div className="mb-10 flex justify-center">
            <FilterDropdown
                value={value}
                onValueChange={onValueChange}
                placeholder="Choose Month"
                options={options.map((month) => ({
                    value: month,
                    label: toTitleCase(month),
                }))}
                className="!h-[60px] !w-[246px] text-lg"
            />
        </div>
    );
}
