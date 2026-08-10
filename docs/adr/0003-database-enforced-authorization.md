# Enforce private-data authorization at the database boundary

AthR uses Supabase PostgreSQL Row Level Security as the authoritative boundary for user-owned and membership-protected data, with application checks treated as additional UX and validation rather than the security boundary. This couples authorization to PostgreSQL policy semantics, but it materially reduces the risk that future routes, clients, or realtime subscriptions accidentally expose drafts, applications, saves, messages, notifications, or moderation data because a frontend or server handler omitted a check.
