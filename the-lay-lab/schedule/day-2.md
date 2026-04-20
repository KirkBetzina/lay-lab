# THE LAY LAB - Posting Schedule
# Week 3-4 Organic Campaign

## Today's Posts (Day 2 - April 8th)

| Time | Platform | Account ID | Content |
|------|----------|------------|---------|
| 8:00 AM | X (Twitter) | 54722 | "Turn $5 into $50 – real-world micro-investing tricks 🧵" |
| 12:00 PM | X (Twitter) | 54722 | "The 80/20 Rule for Cash-Flow: automate 20% of income into a high-yield account 💰" |
| 6:00 PM | TikTok | 54721 | Hook: "Got spare change? Here's how to make it work for you" - Quick cuts, micro-investing visual - CTA: Save + follow |

## Assets Ready
- NOTE: Images to be generated separately by Kirk using AI

## Content Source
Week 3 "Smart Money Moves" - Post 1 Carousel concept

## Posting Log
- 

## Status
- Drafts ready for review
- Week 3 content loaded
- 3 visuals prepared

## Commands to Post (ready when approved)
```bash
# Morning X post
curl -X POST "https://api.post-bridge.com/v1/posts" \
  -H "Authorization: Bearer pb_live_5qSLSAGX9vxWEtYqqxRhvz" \
  -H "Content-Type: application/json" \
  -d '{"caption": "Turn $5 into $50 – real-world micro-investing tricks 🧵", "social_accounts": [54722]}'

# Midday X post  
curl -X POST "https://api.post-bridge.com/v1/posts" \
  -H "Authorization: Bearer pb_live_5qSLSAGX9vxWEtYqqxRhvz" \
  -H "Content-Type: application/json" \
  -d '{"caption": "The 80/20 Rule for Cash-Flow: automate 20% of income into a high-yield account 💰", "social_accounts": [54722]}'

# Evening TikTok post
curl -X POST "https://api.post-bridge.com/v1/posts" \
  -H "Authorization: Bearer pb_live_5qSLSAGX9vxWEtYqqxRhvz" \
  -H "Content-Type: application/json" \
  -d '{"caption": "Got spare change? Here'\''s how to make it work for you. Quick cuts, micro-investing. Save + follow", "social_accounts": [54721]}'
```

## Review Checklist
- [ ] Approve caption wording
- [ ] Confirm image placements
- [ ] Add any specific hashtags or mentions
- [ ] Approve posting times (or adjust as needed)