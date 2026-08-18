# Rule: Generating a High-Level-Brief (HLB)
## Goal

A HLB is the vision and northstar for the project. it doesn't contain lots of details, it is ambitious and audacious.

It should keep us inspired when we get down into the trenches of development and bug fixing.

This is why we are doing what we are doing.

## Purpose of a Creative Brief

- **Alignment:** Ensures everyone involved understands the project's goals and strategic direction. 
- **Clarity:** Translates business needs into a human problem, making it understandable for the creative team. 
- **Focus:** Directs creative thinking towards a specific problem and target audience. 
- **Efficiency:** Avoids confusion, saves time, and helps manage project time/effort and budgets effectively.

## Process

1.  **Receive Initial Prompt:** The user provides a brief description or request for a new feature or functionality.
2.  **Ask Clarifying Questions:** Before writing the HLB, the AI *must* ask clarifying questions to gather sufficient detail. The goal is to understand the overall vision of the product, not necessarily the detailed "what" "why" or "how" (which the developer will figure out). Make sure to provide options in letter/number lists so I can respond easily with my selections.
3.  **Generate HLB:** Based on the initial prompt and the user's answers to the clarifying questions, generate a HLB using the structure outlined below.
4. **Save HLB:** Save the generated document as `00-project-hlb.md` inside the `/docs` directory.
5. **Keep HLB updated:** as the project progresses, if we add or change our vision or approach based on our learnings update the  `00-project-hlb.md` inside the `/docs` directory. Check with me before updating it though.

## Clarifying Questions (Examples)

The AI should adapt its questions based on the prompt, but here are some common areas to explore:
* **Problem/Goal:** "What problem does this feature solve for the user?" or "What is the main goal we want to achieve with this feature?"
* **Target User:** "Who is the primary user of this feature?"
* **Core Functionality:** "Can you describe the key actions a user should be able to perform with this feature?"
* **Acceptance Criteria:** "How will we know when this feature is successfully implemented? What are the key success criteria?"
* **Scope/Boundaries:** "Are there any specific things this project *should not* achieve (non-goals)?"

## HLB Structure

The generated HLB should include the following sections:
1. **Project Title & Overview:** A clear, concise name and description to identify the project and its intention. 
2. **Project vision statement**
3. **Project Objectives/Goals:** What the project aims to achieve, often presented from a business perspective.
4. **Target Audience:** A detailed description of the intended audience, including demographics, psychographics, and an insight into their motivations or unmet needs. 
5. **The Problem/Opportunity:** The core business problem or market opportunity the creative work is intended to address. 
6. **The Insight:** A profound understanding of the target audience that provides a new perspective or solution to the problem. 
7. **Single-Minded Proposition (SMP) / Key Message:** The core idea or benefit the creative work should communicate, linking the insight to the brand's unique value. 
8. **Deliverables & Distribution:** A list of the final creative assets and the channels (e.g., digital, print) through which they will be distributed. 
9. **Mandatories & Brand Guidelines:** Any required elements, constraints, or existing brand assets, including tone of voice, logo usage, and legal requirements. 
10. **Budget:** The allocated financial resources for the project, influencing decision-making. 
11. **Timeline:** The agreed-upon start date and deadline for the project's completion. 
12. **Stakeholders:** A list of all individuals and teams involved, along with their roles and responsibilities. 
13. **Success Metrics:** How the project's success will be measured, such as increased sales, website traffic, or engagement. 

## Target Audience

Assume the primary reader of the HLB is a **junior developer**. Therefore, vision should be clear explicit, unambiguous, and avoid jargon where possible. Provide enough detail for them to understand the projects vision and direction.

## Output

*   **Format:** Markdown (`.md`)
*   **Location:** `/docs/`
*   **Filename:** `00-project-hlb.md`

## Final instructions

1. Do NOT start implementing the HLB
2. Make sure to ask the user clarifying questions
3. Take the user's answers to the clarifying questions and improve the HLB (see continuous improvement below)
4. After creating the HLB we will move on to the Product Requirements Document (PRD)

## Continuous improvement

If any of the content in this or other files contains conficting instructions or content that is not helping complete the task also respond with a separate list of suggested changes changes with references to the file and line number, providing context for me to review these suggestions. Do not make any changes to the files unless I agree and confirm with "Change" 

---