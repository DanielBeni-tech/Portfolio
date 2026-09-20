# Graph Report - src  (2026-09-19)

## Corpus Check
- Corpus is ~7,440 words - fits in a single context window. You may not need a graph.

## Summary
- 91 nodes · 167 edges · 8 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- App Shell Layout
- About Community Life
- Hero Motion GSAP
- Unused Types Experiments
- Selected Work
- Competitions Reveal
- Experience Education
- What I Build

## God Nodes (most connected - your core abstractions)
1. `Reveal()` - 12 edges
2. `Profile` - 7 edges
3. `registerGsap()` - 6 edges
4. `Hero()` - 3 edges
5. `projects` - 3 edges
6. `About()` - 2 edges
7. `Community()` - 2 edges
8. `Competitions()` - 2 edges
9. `Contact()` - 2 edges
10. `CustomCursor()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (8 total, 0 thin omitted)

### Community 0 - "App Shell Layout"
Cohesion: 0.16
Nodes (11): app_globals, jetbrainsMono, manrope, metadata, poppins, CustomCursor(), Footer(), Navbar() (+3 more)

### Community 1 - "About Community Life"
Cohesion: 0.19
Nodes (8): About(), Community(), Contact(), Life(), communityActivities, CommunityItem, hobbies, HobbyItem

### Community 2 - "Hero Motion GSAP"
Cohesion: 0.31
Nodes (9): Hero(), splitWords(), RevealProps, lib_gsap_gsap, registerGsap(), lib_gsap_usegsap, ref_gsap, ref_gsap_react (+1 more)

### Community 3 - "Unused Types Experiments"
Cohesion: 0.18
Nodes (9): statusLabels, experiments, CommunityActivity, Experiment, ExperimentStatus, Profile, Project, ProjectCategory (+1 more)

### Community 4 - "Selected Work"
Cohesion: 0.25
Nodes (6): filters, Projects(), featuredIds, featuredProjects, ProjectItem, projects

### Community 5 - "Competitions Reveal"
Cohesion: 0.25
Nodes (5): Competitions(), Reveal(), capabilities, CompetitionItem, competitions

### Community 6 - "Experience Education"
Cohesion: 0.43
Nodes (5): Experience(), certifications, education, ExperienceItem, experiences

### Community 7 - "What I Build"
Cohesion: 0.40
Nodes (4): icons, Services(), ServiceItem, services

## Knowledge Gaps
- **22 isolated node(s):** `manrope`, `poppins`, `jetbrainsMono`, `metadata`, `statusLabels` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 32 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Reveal()` connect `Competitions Reveal` to `App Shell Layout`, `About Community Life`, `Hero Motion GSAP`, `Unused Types Experiments`, `Selected Work`, `Experience Education`, `What I Build`?**
  _High betweenness centrality (0.158) - this node is a cross-community bridge._
- **Why does `Profile` connect `App Shell Layout` to `Hero Motion GSAP`, `What I Build`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **Why does `registerGsap()` connect `Hero Motion GSAP` to `Selected Work`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **What connects `manrope`, `poppins`, `jetbrainsMono` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._