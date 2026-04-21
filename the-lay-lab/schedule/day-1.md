# THE LAY LAB - Posting Schedule
# Week 1-2 Organic Campaign

## Today's Posts (Day 1 - April 7th)

| Time | Platform | Account ID | Content |
|------|----------|------------|---------|
| 8:00 AM | X (Twitter) | 54722 | "The 3 betting mistakes costing you money 🧵" |
| 12:00 PM | X (Twitter) | 54722 | "Bankroll management isn't sexy. But it's the difference between lasting 3 months and 3 years." |
| 6:00 PM | TikTok | 54721 | Hook: "The 3 mistakes killing your betting bank" - Quick cuts, educational - CTA: Save + follow |

## Posting Log
- 2026-04-07 08:26: UTC - Test post sent (success)
- 

## Status
- Week 1 content ready
- 2 accounts connected: Twitter (54722), TikTok (54721)
- Posting: 2-3 posts/day organic

## Commands to Post
```bash
# Morning X post
curl -X POST "https://api.post-bridge.com/v1/posts" \
  -H "Authorization: Bearer pb_live_5xiQ9715b2BEYruE1hn9iQ" \
  -H "Content-Type: application/json" \
  -d '{"caption": "The 3 betting mistakes costing you money 🧵", "social_accounts": [54722]}'

# Midday X post  
curl -X POST "https://api.post-bridge.com/v1/posts" \
  -H "Authorization: Bearer pb_live_5xiQ9715b2BEYruE1hn9iQ" \
  -H "Content-Type: application/json" \
  -d '{"caption": "Bankroll management isn'\''t sexy. But it'\''s the difference between lasting 3 months and 3 years.", "social_accounts": [54722]}'

# Evening TikTok post
curl -X POST "https://api.post-bridge.com/v1/posts" \
  -H "Authorization: Bearer pb_live_5xiQ9715b2BEYruE1hn9iQ" \
  -H "Content-Type: application/json" \
  -d '{"caption": "The 3 mistakes killing your betting bank. Quick cuts, educational. Save + follow", "social_accounts": [54721]}'
```