"""Generate the AMA Global Marketing SIG bylaws PDF."""
from pathlib import Path

from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)

OUTPUT = Path(__file__).resolve().parents[1] / "public" / "documents" / "ama-global-marketing-sig-bylaws.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

styles = getSampleStyleSheet()
title_style = ParagraphStyle(
    "DocTitle",
    parent=styles["Title"],
    fontSize=18,
    leading=22,
    spaceAfter=18,
    alignment=TA_LEFT,
)
intro_style = ParagraphStyle(
    "Intro",
    parent=styles["BodyText"],
    fontSize=11,
    leading=15,
    spaceAfter=18,
)
article_style = ParagraphStyle(
    "Article",
    parent=styles["Heading2"],
    fontSize=13,
    leading=17,
    spaceBefore=14,
    spaceAfter=6,
    textColor="#1f2937",
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["BodyText"],
    fontSize=10.5,
    leading=15,
    spaceAfter=8,
)
list_item_style = ParagraphStyle(
    "ListItem",
    parent=body_style,
    spaceAfter=2,
)


def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(text, list_item_style), leftIndent=12) for text in items],
        bulletType="bullet",
        start="•",
        leftIndent=18,
        bulletFontSize=10,
        spaceBefore=2,
        spaceAfter=10,
    )


def numbered(items):
    return ListFlowable(
        [ListItem(Paragraph(text, list_item_style), leftIndent=14) for text in items],
        bulletType="1",
        leftIndent=20,
        bulletFontSize=10,
        spaceBefore=2,
        spaceAfter=10,
    )


story = []

story.append(Paragraph("AMA Global Marketing Special Interest Group — Bylaws", title_style))
story.append(
    Paragraph(
        "The following bylaws govern the operations, membership, and leadership of the "
        "<b>AMA Global Marketing Special Interest Group</b>.",
        intro_style,
    )
)

story.append(Paragraph("I. Naming of the Group", article_style))
story.append(Paragraph("AMA Global Marketing Special Interest Group", body_style))

story.append(Paragraph("II. Focus", article_style))
story.append(
    Paragraph(
        "The AMA Global Marketing Interest Group is for those who want to begin or continue to "
        "explore the field of global marketing. The purpose of the group is to foster a dialogue "
        "and expand knowledge on global marketing issues among academics, business people, and "
        "government representatives.",
        body_style,
    )
)
story.append(Paragraph("The group is designed to meet the needs of faculty who:", body_style))
story.append(
    bullets(
        [
            "Have been teaching international marketing and want to explore specific issues in more depth",
            "Would like to incorporate global marketing issues into their existing marketing courses",
            "Would like to conduct international marketing research",
            "Would like to exchange ideas regarding international marketing teaching and/or research issues",
            "Would like access to international marketing resources that could be used for research and/or classroom activities",
        ]
    )
)

story.append(Paragraph("III. Goals", article_style))
story.append(
    Paragraph("The goals of the AMA Global Marketing Special Interest Group are to:", body_style)
)
story.append(
    bullets(
        [
            "Promote recognition of global marketing as a distinct area of study within the American Marketing Association",
            "Foster research, teaching, and the development of educational programs and materials in the area of global marketing",
            "Promote the exchange of information, ideas, and experiences relating to global marketing teaching, research, and practice",
            "Provide a forum for discussion and interaction on global marketing issues at AMA conferences",
            "Work collaboratively with other AMA SIGs, divisions, and related professional groups to advance global marketing scholarship",
        ]
    )
)

story.append(Paragraph("IV. Membership", article_style))
story.append(
    Paragraph(
        "Membership in the AMA Global Marketing Special Interest Group is open to all members in "
        "good standing of the American Marketing Association. There are no additional dues required "
        "for SIG membership beyond the standard AMA membership.",
        body_style,
    )
)

story.append(Paragraph("V. Board of Directors and Officers", article_style))
story.append(
    Paragraph(
        "The AMA Global Marketing Special Interest Group is governed by a Board of Directors "
        "elected from among the membership.",
        body_style,
    )
)
story.append(Paragraph("<b>Officers:</b>", body_style))
story.append(
    bullets(
        [
            "<b>Chair</b> — Serves a two-year term; provides overall leadership and represents the SIG to the AMA",
            "<b>Vice-Chair / Chair-Elect</b> — Serves a two-year term; supports the Chair and prepares to assume the chair role",
            "<b>Past-Chair</b> — Serves a two-year term immediately following service as Chair; provides continuity and advisory support",
            "<b>Secretary</b> — Maintains records and communications",
            "<b>Treasurer</b> — Oversees finances and budgeting",
            "<b>Vice-Chair of Membership</b> — Leads membership development and outreach",
            "<b>Vice-Chair of Communications</b> — Oversees newsletters, website, and external communications",
        ]
    )
)
story.append(
    Paragraph(
        "Upon completing active service on the Board of Directors, former Chairs will serve a "
        "<b>three-year term as ex officio members</b> of the Board.",
        body_style,
    )
)

story.append(Paragraph("VI. Sample Activities", article_style))
story.append(
    Paragraph(
        "The activities of the Global Marketing Special Interest Group will be varied, but in all "
        "cases consistent with the objectives of the SIG cited in Article III.",
        body_style,
    )
)
story.append(Paragraph("<b>Examples of activities:</b>", body_style))
story.append(
    bullets(
        [
            "Holding semi-annual meetings of the Board of Directors",
            "Communicating with AMA members through <i>Global Interests</i> (the quarterly newsletter of the AMA Global Marketing SIG)",
            "Organizing and hosting global marketing symposia, tracks, and sessions at conferences",
            "Other events where appropriate",
        ]
    )
)
story.append(
    Paragraph(
        "Communication and interaction with other AMA SIGs and professional groups are viewed as "
        "important activities to the Global Marketing SIG. The SIG will work with such groups as "
        "the <b>Academy of Marketing</b>, <b>Centers for International Business and Research</b>, "
        "etc., as well as journals such as the <i>Journal of International Marketing</i>, to "
        "achieve its goals.",
        body_style,
    )
)

story.append(Paragraph("VII. Finances", article_style))
story.append(
    Paragraph(
        "A budget shall be formulated by the Global Marketing Special Interest Group Chair for "
        "submission to the American Marketing Association per the requirements of the Academic "
        "Council of the American Marketing Association.",
        body_style,
    )
)
story.append(
    bullets(
        [
            "<b>Conference-Related Expenses</b> (audio-visual requirements, SIG receptions, Board Meetings, etc.) should be approved by the Chair prior to their occurrence",
            "<b>Non-Conference Expenses</b> must be approved by a majority of the voting members of the Board of Directors",
        ]
    )
)
story.append(
    Paragraph(
        "Reimbursement for all Global Marketing Special Interest Group expenditures shall be "
        "coordinated through the Chair, or Treasurer, who will requisition funds from the AMA.",
        body_style,
    )
)

story.append(Paragraph("VIII. Amending the Bylaws", article_style))
story.append(
    Paragraph(
        "Amending the bylaws of the Global Marketing Special Interest Group will follow the "
        "following procedures:",
        body_style,
    )
)
story.append(
    numbered(
        [
            "Recommendations for a specific bylaw change, or addition, should be presented <b>in writing</b> to the Chair of the SIG.",
            "The Chair will then present the proposed changes to the Board of Directors.",
            "Proposals for changes to the bylaws receiving <b>majority support</b> of the voting members of the Board will be approved.",
        ]
    )
)

doc = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=LETTER,
    leftMargin=1.0 * inch,
    rightMargin=1.0 * inch,
    topMargin=1.0 * inch,
    bottomMargin=1.0 * inch,
    title="AMA Global Marketing SIG Bylaws",
    author="AMA Global Marketing SIG",
)
doc.build(story)
print(f"Wrote {OUTPUT}")
