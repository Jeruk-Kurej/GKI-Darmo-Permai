type MediaHeadingProps = {
    eyebrow: string;
    title: string;
};

export function MediaHeading({ eyebrow, title }: MediaHeadingProps) {
    return (
        <div className="mb-6 text-center">
            <p className="mb-4 type-eyebrow text-ink">{eyebrow}</p>
            <h2 className="mb-6 type-h2 text-ink">{title}</h2>
        </div>
    );
}
