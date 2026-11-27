---
layout: ../layouts/SixLayout.astro
title: Six AI Leadership Labs | Vicus Brits
description: A working programme for six AI leadership labs across engineering, operating models and executive decision-making.
---

# Six AI Leadership Labs

*A solo executive capability-building programme | Engineering · Operating Model · Executive*

**Purpose:** Build demonstrable AI leadership capability while producing credible, publishable evidence. Prioritise learning (55%) and market signalling (45%) through the same artefacts—not separate publicity work.

## Programme at a glance

| Competence | Lab | Timebox |
| --- | --- | --- |
| Engineering | 1. Event-driven architecture | 3 weeks |
| Engineering | 2. AI code refactoring & model comparison | 4 weeks |
| Operating model | 3. One-person research department: autonomous soil testing | 4 weeks |
| Operating model | 4. Managing agents through evals | 3 weeks |
| Executive | 5. AI capital allocation challenge | 2 weeks |
| Executive | 6. FreshDairy AI transformation playbook | 5 weeks |

**Total:** 21 working weeks of labs (average 3.5 weeks), excluding breaks. Assume 8–12 focused hours/week; reduce scope, not evaluation discipline, if time is constrained. Labs may be scheduled over a longer calendar period.

## Common rules for all six labs

- Start with a one-page hypothesis, baseline, scope boundary and success rubric; freeze the rubric before running the experiment.
- Use synthetic or public data only. Do not expose employer data, customer information or confidential code.
- Maintain a dated decision log, source register, actual time/cost ledger and reproducible instructions.
- Record failures and negative results; do not infer enterprise-wide impact from a solo simulation.
- Finish each lab with a demo or decision artefact, evidence pack, one-page executive brief and a public-safe case study.
- Define a stop rule: when the timebox expires, report what worked, what failed and what remains unproven.

*AI Leadership Labs | Working programme | November 2026*

## LAB 1 | Event-Driven Architecture

**Engineering competence | Timebox: 3 weeks**

### Core question

Can I build and explain a resilient, asynchronous AI-enabled workflow on modest infrastructure?

### Execution instructions

- Build a minimal service: API receives a job and returns an ID; a queue/broker dispatches work; a worker processes it; a status endpoint reports state.
- Use Docker Compose, a small database, a broker and an AI or deterministic mock worker. Keep it VPS-friendly; avoid Kubernetes unless needed.
- Add retries with backoff, idempotency keys, dead-letter handling, structured logs and basic metrics.
- Inject duplicate messages, worker crashes, timeouts and broker restarts; capture recovery evidence.

### Weekly plan

- Week 1: architecture diagram, job contract, containers and happy-path demo.
- Week 2: failure handling, state transitions and operational visibility.
- Week 3: scripted fault injection, measurement and documentation.

### Deliverables

Repository with reproducible startup steps; architecture diagram; failure test scripts; operational dashboard or log walkthrough; 3-minute demo.

### Definition of done / success criteria

- A submitted job progresses through queued/running/succeeded or failed states; status is queryable.
- Duplicate delivery does not cause duplicate business effects in the chosen scenario.
- At least four failure scenarios are demonstrated with observed recovery or explicit failure containment.
- A new reviewer can run the demo from documented steps and explain queue, worker, retry and dead-letter responsibilities.

### Evidence to capture

Actual hours, direct costs, versioned artefacts, decisions and interventions, observed errors, screenshots or short demonstrations, and a one-page executive lesson: What can I now do? What can I credibly demonstrate?

*AI Leadership Labs | Working programme | November 2026*

## LAB 2 | AI Code Refactoring & Model Comparison

**Engineering competence | Timebox: 4 weeks**

### Core question

Can structured context and assurance help a smaller local model refactor Java code as reliably as a frontier model?

### Execution instructions

- Create 8–12 small Java refactoring cases with known behaviour and deliberately inconsistent code patterns.
- Write a short, machine-readable pattern catalogue and a human-readable review guide.
- Run three configurations: frontier model; local model on ~16 GB VRAM; same local model with engineered context and independent assurance.
- Keep prompts, tools, time limits and case sets as comparable as possible; log versions and model settings.
- Evaluate compilation, behaviour-preserving tests, pattern compliance, manual corrections, latency and total cost; blind-review a sample.

### Weekly plan

- Week 1: cases, golden tests, patterns and scoring rubric.
- Week 2: frontier baseline and local model setup.
- Week 3: structured-context/assurance runs and repeated trials.
- Week 4: analyse results, rerun anomalies and publish evidence.

### Deliverables

Case corpus; refactoring pipeline; pattern catalogue; results spreadsheet; before/after code samples; comparative report.

### Definition of done / success criteria

- At least 8 identical cases attempted in all three configurations, with ≥2 runs per configuration where feasible.
- Every accepted refactor compiles and passes pre-existing behaviour tests; failures are counted, not hidden.
- Pattern violations and human repair effort are scored consistently.
- Report success rates, time, cost and uncertainty without claiming one model is universally superior.

### Evidence to capture

Actual hours, direct costs, versioned artefacts, decisions and interventions, observed errors, screenshots or short demonstrations, and a one-page executive lesson: What can I now do? What can I credibly demonstrate?

*AI Leadership Labs | Working programme | November 2026*

## LAB 3 | One-Person Research Department: Soil Testing

**Operating-model competence | Timebox: 4 weeks**

### Core question

Can specialist agents produce a credible investment assessment of autonomous soil-testing services for South African farmers?

### Execution instructions

- Freeze one brief: market demand, customer economics, technology, competitors, service model, operational constraints and five-year financial outlook.
- Research the opportunity yourself using public sources; track time and keep your report private from the agents.
- Configure specialist research, product, financial, risk and independent assurance agents; give them the same brief and source rules.
- Require sourced claims, explicit assumptions, sensitivity analysis and a model with traceable formulas.
- Compare anonymised reports against a rubric; optionally include a single-model AI baseline.

### Weekly plan

- Week 1: brief, rubric, financial template and human research.
- Week 2: finish human report and create agent workflow.
- Week 3: agent research, financial model and assurance.
- Week 4: blinded assessment, arithmetic audit and comparison.

### Deliverables

Two complete reports; financial workbooks; citations/source registers; agent orchestration instructions; comparative scorecard.

### Definition of done / success criteria

- Both reports address the same six required sections and reach an explicit invest/test/reject recommendation.
- Every material numerical assumption is sourced or labelled as an estimate; calculations reconcile.
- Assess factual accuracy, source credibility, completeness, financial logic, insight, elapsed time and human effort.
- Publish a defensible comparison, including where agents failed and where human expertise mattered.

### Evidence to capture

Actual hours, direct costs, versioned artefacts, decisions and interventions, observed errors, screenshots or short demonstrations, and a one-page executive lesson: What can I now do? What can I credibly demonstrate?

*AI Leadership Labs | Working programme | November 2026*

## LAB 4 | Managing Agents Through Evals

**Operating-model competence | Timebox: 3 weeks**

### Core question

When can evaluation-led supervision reduce human checking without missing unacceptable AI errors?

### Execution instructions

- Create 60–100 synthetic business cases with expected outcomes and risk labels; reserve a hidden holdout set.
- Build a task agent and separate evaluator using deterministic checks where possible and rubric-based AI grading only where needed.
- Compare full human review, eval-flagged human review, and risk-based autonomy with mandatory high-risk escalation.
- Plant ambiguous cases and evaluator traps; manually audit a sample of apparently successful outputs.
- Define release thresholds and a rollback/withdraw-autonomy policy before measuring.

### Weekly plan

- Week 1: case set, ground truth, rubric and baseline.
- Week 2: evaluator, thresholds and three supervision modes.
- Week 3: holdout evaluation, error analysis and governance memo.

### Deliverables

Synthetic dataset; evaluator implementation; confusion matrix; escalation policy; supervision dashboard or spreadsheet.

### Definition of done / success criteria

- All cases have traceable expected outcomes or documented adjudication criteria.
- Measure false accepts, false rejects, missed critical errors, review minutes and cost for each mode.
- No high-risk case is auto-approved in the risk-based design.
- Document at least three evaluator failure modes and the controls that detect or contain them.

### Evidence to capture

Actual hours, direct costs, versioned artefacts, decisions and interventions, observed errors, screenshots or short demonstrations, and a one-page executive lesson: What can I now do? What can I credibly demonstrate?

*AI Leadership Labs | Working programme | November 2026*

## LAB 5 | AI Capital Allocation Challenge

**Executive competence | Timebox: 2 weeks**

### Core question

How should a traditional organisation allocate a constrained AI budget across competing strategic choices?

### Execution instructions

- Invent a consistent company profile, financial baseline and R50m three-year AI envelope.
- Develop four investment portfolios: central AI lab, process modernisation, workforce capability and new AI products.
- Score each option on value, readiness, execution risk, time to value, strategic differentiation and dependencies.
- Allocate the budget; model best/base/worst cases, and shocks such as 30% funding cuts or low adoption.
- Write an investment committee memo with staged funding, kill criteria and measurable benefit owners.

### Weekly plan

- Week 1: baseline, evidence research, assumptions and scoring model.
- Week 2: allocation, scenario stress tests and investment memo.

### Deliverables

Editable allocation model; decision matrix; scenario outputs; two-page investment committee memo.

### Definition of done / success criteria

- Budget reconciles to R50m and every funded initiative has an owner, expected benefit and milestone.
- At least three alternative allocations and three stress scenarios are evaluated consistently.
- Recommendation includes what not to fund and explicit stop/scale decision triggers.
- Distinguish illustrative financial assumptions from externally supported facts.

### Evidence to capture

Actual hours, direct costs, versioned artefacts, decisions and interventions, observed errors, screenshots or short demonstrations, and a one-page executive lesson: What can I now do? What can I credibly demonstrate?

*AI Leadership Labs | Working programme | November 2026*

## LAB 6 | FreshDairy AI Transformation Playbook

**Executive competence | Timebox: 5 weeks**

### Core question

How can a vertically integrated 500-person South African yoghurt business transform over 24 months without compromising safety or continuity?

### Execution instructions

- Define FreshDairy: plastic cup production, yoghurt manufacturing, cold-chain distribution and retail sales; map 500 roles, systems and baseline KPIs.
- Design target capabilities and prioritise use cases across manufacturing, quality, maintenance, planning, commercial, finance and people.
- Sequence a 24-month roadmap with owners, dependencies, training, data prerequisites, governance gates and budget assumptions.
- Build a 30-scenario failure register grouped into technology/data, operations/food safety, people, economics and governance.
- For each scenario document trigger, consequence, prevention, early warning, response, accountable owner and residual risk.
- Produce six short modules: current state, future state, roadmap, failure analysis, interventions, measurement/adaptation.

### Weekly plan

- Week 1: company model, departments, roles, current-state scorecard.
- Week 2: future-state operating model and ranked use cases.
- Week 3: roadmap, dependencies, change and skills plans.
- Week 4: 30 failure scenarios, mitigations and escalation routes.
- Week 5: metrics, stage gates, board review and consolidated playbook.

### Deliverables

Six modular briefs; organisation map; 24-month roadmap; 30-item risk register; KPI tree; board-level transformation summary.

### Definition of done / success criteria

- All six modules are complete and individually understandable in 10–15 minutes.
- Every major initiative has owner, dependency, milestone, adoption metric and stop/scale gate.
- All 30 risks have warning signs, response actions and owners; food safety and production continuity are non-negotiable constraints.
- Roadmap fits the stated budget and workforce assumptions, with explicit uncertainty and contingencies.

### Evidence to capture

Actual hours, direct costs, versioned artefacts, decisions and interventions, observed errors, screenshots or short demonstrations, and a one-page executive lesson: What can I now do? What can I credibly demonstrate?

*AI Leadership Labs | Working programme | November 2026*

## Recommended sequencing and review gates

Suggested order: 1 → 2 → 3 → 4 → 5 → 6. Lab 2 provides comparative engineering discipline; Lab 3 explores agent coordination; Lab 4 adds evaluation-led governance; Labs 5–6 integrate these lessons into executive decisions.

At the end of each lab, score 0–5 on: new practical capability, quality of evidence, repeatability, executive relevance and publishability. A score below 3 on evidence or repeatability means report the lab as exploratory rather than validated.

## Publication package

- One concise article: question → method → findings → limitations → executive implications.
- One reusable public artefact (diagram, rubric, scorecard, risk register excerpt or demo).
- One private reflection on the next capability gap and whether to change the following lab.

All business cases and budgets in this playbook are hypothetical. Use current external evidence during execution, cite it, and avoid presenting simulated outcomes as real-world performance.

*AI Leadership Labs | Working programme | November 2026*
