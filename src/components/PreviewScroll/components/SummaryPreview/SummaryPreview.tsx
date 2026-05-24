type SummaryPreviewProps = {
  summary: string;
};
function SummaryPreview({ summary }: SummaryPreviewProps) {
  return (
    <>
      <div className="resume-section">
        <div className="resume-section-title">PROFESSIONAL SUMMARY</div>

        <p
          style={{
            fontSize: ".85rem",
            color: "#2d2c2a",
            lineHeight: 1.6,
          }}
        >
          {summary}
        </p>
      </div>
    </>
  );
}

export default SummaryPreview;
