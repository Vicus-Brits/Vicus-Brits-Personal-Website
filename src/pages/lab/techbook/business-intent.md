---
layout: ../../../layouts/TechBookReportLayout.astro
title: Business Intent Brief | TechBook | The Lab | Vicus Brits
description: Current TechBook business intent, approved scope, outcomes, and constraints.
---

# Business Intent Brief

**Status:** Gate 1 approved on 2026-11-10; this current-intent view incorporates subsequent Product Owner decisions, not a new Gate 1 approval.  
**Project:** TechBook  
**Authority:** Original approval DEC-016 and later decisions in the [Decision & Assurance Log](/lab/techbook/requirements-decision-assurance-log/).

## Problem and intended outcome

Build a working, non-commercial LAB experiment for a Johannesburg technical-service company coordinating on-site technician visits for client companies. The LAB is test-only and uses no production client data; production deployment is outside this project (DEC-001–003, DEC-015, DEC-046).

## Users and scope

- Clients and, on their behalf, administrators can create Service or Breakdown requests. Administrators triage and manually assign technicians; assigned technicians execute visits (DEC-003–006, DEC-053, DEC-074).
- The web application and two-way WhatsApp booking conversations, including AI-assisted actions, are in initial scope. Authorised phone-number lists, role permissions, explicit client confirmation for AI creation or cancellation, and human escalation apply (DEC-031–038, DEC-063, DEC-069, DEC-073). Live WhatsApp is not replaced by simulation without a further human decision.
- Technicians or administrators accept visit times; clients confirm the proposed date and time via app, WhatsApp or a link in the proposal email, including clients without the app. The link is bound to the intended client, request and proposal/version using a cryptographically secure token; it expires after 24 hours or earlier invalidation. Opening it only displays details; explicit confirmation and a one-time code to the client's registered email are required. The code expires after 10 minutes, is invalidated after five incorrect attempts, and no more than three codes may be issued per client/proposal per hour; issuing a new code invalidates the previous one. Successful confirmation consumes the link and code. Changed proposals, cancelled requests and revoked permissions invalidate the link. The forwarded link alone is insufficient. Recheck identity, authority, assignment, proposal and booking status before saving; failed or duplicate submissions must not change state or duplicate notifications (DEC-097, DEC-099). Email reply handling is not required. An administrator sends the conditional final-confirmation email, whose mail-service acceptance is required before Confirmed is saved. The app shows authoritative status; uncertain sends are referred for admin reconciliation and saved cancellations take precedence (DEC-029, DEC-052, DEC-079–080, DEC-093–095, DEC-097). Rescheduling and started-work restrictions follow DEC-076–077.
- Admin operational oversight, technician mobile web schedules and execution, client history and event notifications are in scope (DEC-074). Automated technician matching and time recommendations, quotation and invoicing, management reporting and automated emergency reassignment are excluded (DEC-005, DEC-074).
- Company users access their own requests by default; administrators may grant same-company view/cancel access. Technicians have assignment-based access to allocated requests, revoked immediately on removal unless another independently authorised basis applies; administrators have authorised administrative access. A removed technician receives a generic in-app and email notice without booking details or restored access (DEC-069, DEC-089).

## Success measures and constraints

- At an agreed cutoff after intended actions and applicable notification retries, reconcile every logged test request, including at least 20 requests and Breakdown, rescheduling and cancellation cases. Outcome completeness is qualifying current statuses divided by all logged requests and passes only at 100%; Confirmed, In Progress, Completed, Cancelled, Declined with reason and Unresolved with reason qualify. Pending is visible, assigned and traceable but fails. No request may be excluded or deleted to improve the result (DEC-070, DEC-075).
- Report scheduling success separately: count Confirmed, In Progress and Completed once per request by current cutoff status; no separate success threshold has been approved. In Progress is not service completion (DEC-066, DEC-075).
- Business hours are 07:00–17:00 SAST weekdays excluding South African public holidays. Breakdown and Service response deadlines and effective receipt follow DEC-068.
- Keep costs low and add no paid extras. Protect personal data, enforce server-side authorisation and do not commit secrets. The previous `security.md` and existing-stack requirements were removed by DEC-048. The stated Docker-on-VPS hosting and operational readiness remain unverified. `/health` returns HTTP 200 only when application and database health checks succeed, and HTTP 503 when the application responds but a health check fails. The external check treats non-200 responses, network failures and requests exceeding five seconds as failed checks; it runs nominally every five minutes and alerts the designated LAB administrator after three consecutive scheduled failures. Recovery resets the failure sequence and is recorded. Configure the recipient during deployment. A free external service is planned, with UptimeRobot Free as an initial candidate; verify during Design whether it supports the required consecutive-failure behavior, and if not identify a no-cost alternative without changing the rule. No paid monitoring or production availability SLA is required. The monitoring arrangement and hosting/operational feasibility remain unverified (DEC-014–015, DEC-046, DEC-048, DEC-090, DEC-092, DEC-099).
- Feasibility evidence for live WhatsApp, sender authenticity and consent, AI cost, hosting and operations is outstanding; see FND-002–005 and FND-006 in the [Decision & Assurance Log](/lab/techbook/requirements-decision-assurance-log/). No integration has been demonstrated by this brief.

## Gate 1 — Business Intent Approval

The Product Owner approved the original brief on 2026-11-10 (DEC-016). Subsequent scope changes are separately authorised in the decision log; this reconciliation does not imply a new approval, accept residual risks, approve requirements or authorise production deployment.
