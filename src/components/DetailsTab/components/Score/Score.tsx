import { useMemo } from "react";
import "./Score.css";
import type { ResumeData } from "../../../../types/resume";

type AtsScoreProps = {
  resume: ResumeData;
  keywords: string[];
};

function Score({ resume, keywords }: AtsScoreProps) {
  // Gathers all resume strings into a single text block
  const getResumeText = (): string => {
    return [
      resume.contact?.fullName,
      resume.contact?.headline,
      resume.contact?.email,
      resume.contact?.phone,
      resume.contact?.location,
      resume.summary,
      ...(resume.experience?.flatMap((e) => [
        e.jobTitle,
        e.company,
        ...e.bulletPoints,
      ]) || []),
      ...(resume.education?.flatMap((e) => [
        e.degree,
        e.school,
        e.fieldOfStudy,
      ]) || []),
      ...(resume.skills?.flatMap((g) => g.skillList) || []),
      ...(resume.certifications?.flatMap((c) => [c.name, c.issuer]) || []),
      ...(resume.projects?.flatMap((p) => [p.name, p.description]) || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
  };

  const scoreData = useMemo(() => {
    // ──  PROFILE COMPLETENESS (0 to 100 Base) ──
    let completenessScore = 0;
    let completenessMax = 0;

    const addProfileWeight = (hasData: boolean, weight = 10) => {
      completenessMax += weight;
      if (hasData) completenessScore += weight;
    };

    addProfileWeight(!!resume.contact?.fullName?.trim(), 10);
    addProfileWeight(!!resume.contact?.email?.trim(), 8);
    addProfileWeight(!!resume.contact?.phone?.trim(), 6);
    addProfileWeight(!!resume.contact?.headline?.trim(), 5);
    addProfileWeight(!!resume.summary?.trim(), 12);
    addProfileWeight(
      !!(resume.contact?.links && resume.contact.links.length > 0),
      4,
    );
    addProfileWeight(!!(resume.experience && resume.experience.length > 0), 15);
    addProfileWeight(!!(resume.education && resume.education.length > 0), 10);

    const totalSkillsCount =
      resume.skills?.flatMap((g) => g.skillList).length || 0;
    addProfileWeight(totalSkillsCount > 2, 10);

    const baseCompleteness = completenessMax
      ? (completenessScore / completenessMax) * 100
      : 0;

    // ── KEYWORD MODIFIER APPLICATION ──
    let finalPercentage = Math.round(baseCompleteness);
    const validKeywords = keywords
      ? keywords.map((k) => k.trim().toLowerCase()).filter(Boolean)
      : [];

    // Guard Clause: If the entire application is brand new and empty, force 0%
    if (baseCompleteness === 0) {
      finalPercentage = 0;
    } else if (validKeywords.length > 0) {
      const resumeText = getResumeText();
      const matchedKeywords = validKeywords.filter((k) =>
        resumeText.includes(k),
      );
      const matchRatio = matchedKeywords.length / validKeywords.length;

      // Keywords scale the score down if they don't match (up to a 60% penalty drop)
      const keywordMultiplier = 0.4 + matchRatio * 0.6;
      finalPercentage = Math.round(baseCompleteness * keywordMultiplier);
    }

    // ──  DYNAMIC LABELS AND UI COLOR THRESHOLDS ──
    let strokeColor = "#dc2626"; // Red default
    let subtext = "Fill in your details to begin";

    if (finalPercentage === 0) {
      strokeColor = "var(--border-color, #e5e7eb)"; // Neutral gray when empty
      subtext = "Fill in your details to begin";
    } else if (finalPercentage >= 75) {
      strokeColor = "#16a34a"; // Green
      subtext =
        finalPercentage >= 85
          ? "Excellent keyword match!"
          : "Good system match";
    } else if (finalPercentage >= 45) {
      strokeColor = "#d97706"; // Amber / Orange
      subtext = "Keywords missing — score penalized";
    } else {
      subtext = "Critical: Match your target keywords!";
    }

    const circumference = 157;
    const strokeDashoffset =
      circumference - (finalPercentage / 100) * circumference;

    return {
      percentage: finalPercentage,
      strokeColor,
      strokeDashoffset,
      subtext,
    };
  }, [resume, keywords]);

  return (
    <div className="score-ring-wrap">
      <div className="score-ring">
        <svg viewBox="0 0 56 56" width="56" height="56">
          <circle className="track" cx="28" cy="28" r="25" />
          <circle
            className="fill"
            cx="28"
            cy="28"
            r="25"
            stroke={scoreData.strokeColor}
            strokeDasharray="157"
            strokeDashoffset={scoreData.strokeDashoffset}
            style={{
              fill: "none",
              strokeWidth: 5,
              strokeLinecap: "round",
              transformOrigin: "center",
              transform: "rotate(-90deg)",
              transition: "stroke-dashoffset 0.3s ease, stroke 0.3s ease",
            }}
          />
        </svg>
        <div className="val">{scoreData.percentage}%</div>
      </div>

      <div className="score-info">
        <div className="score-label">ATS Score</div>
        <div className="score-sub">{scoreData.subtext}</div>
      </div>
    </div>
  );
}

export default Score;
