# Backend & Data Schema — Daniel Beni Portfolio

## 1. V1 philosophy

**Do not build a backend just because a portfolio can have one.**

The first version can be almost entirely static.

The data model should nevertheless be designed so a backend can be added without rebuilding the UI.

---

# 2. V1 content layer

Use typed TypeScript objects.

```text
content/
├── profile.ts
├── projects.ts
├── experiments.ts
├── journey.ts
├── community.ts
└── social.ts
```

---

# 3. Profile schema

```ts
type Profile = {
  name: string
  title: string
  location: string
  summary: string
  bio: string
  email: string
  github: string
  linkedin?: string
  cv?: string
  currentFocus: string[]
}
```

---

# 4. Project schema

```ts
type Project = {
  id: string
  slug: string
  title: string
  subtitle: string
  year: number
  status: "shipped" | "building" | "experimental" | "paused"
  featured: boolean

  categories: (
    | "ai"
    | "software"
    | "data"
    | "design"
    | "community"
  )[]

  role: string[]
  stack: string[]

  problem: string
  context: string
  solution: string
  architecture?: string
  outcome?: string[]
  lessons?: string[]

  cover: string
  gallery: string[]

  links: {
    github?: string
    live?: string
    demo?: string
  }
}
```

---

# 5. Experiment schema

```ts
type Experiment = {
  id: string
  title: string
  description: string
  status: "building" | "experimental" | "paused" | "shipped"
  technologies: string[]
  date?: string
  link?: string
}
```

---

# 6. Community schema

```ts
type CommunityActivity = {
  id: string
  organization: string
  role: string
  description: string
  year: number
  activities: string[]
  links?: string[]
}
```

---

# 7. Optional backend database

If backend becomes necessary:

### PostgreSQL

Tables:

```text
profiles
projects
project_media
experiments
community_activities
social_links
contact_messages
analytics_events
```

---

# 8. Relational model

```text
profiles
   │
   ├── social_links
   │
   └── current_focus

projects
   │
   ├── project_media
   ├── project_tags
   └── project_links

experiments
   │
   └── experiment_tags

community_activities

contact_messages

analytics_events
```

---

# 9. Contact message

```sql
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY,
  name TEXT,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  status TEXT NOT NULL DEFAULT 'new'
);
```

---

# 10. Analytics event

```sql
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY,
  event_name TEXT NOT NULL,
  path TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

Keep analytics minimal and privacy-conscious.

---

# 11. Future HUGO knowledge base

Potential tables:

```text
knowledge_documents
knowledge_chunks
knowledge_embeddings
conversation_sessions
conversation_messages
```

Example:

```text
knowledge_documents
 ├── project
 ├── experience
 ├── experiment
 ├── community
 └── profile
```

---

# 12. RAG flow

```text
Question
   ↓
Embedding
   ↓
Vector search
   ↓
Top relevant chunks
   ↓
Prompt construction
   ↓
LLM
   ↓
Answer
```

Potential stack:

- FastAPI
- PostgreSQL
- pgvector
- Ollama or hosted LLM
- embeddings model

---

# 13. Important constraint

HUGO must use curated facts.

Never allow:

```text
"Daniel worked at Google"
```

unless that information actually exists in the knowledge base.

The assistant should prefer:

> "I don't have enough information to answer that."

over hallucination.

---

# 14. Migration path

### V1

Static typed content.

### V1.5

GitHub API + contact API.

### V2

Database-backed portfolio content.

### V3

HUGO AI assistant + RAG.

This keeps the first launch focused.
