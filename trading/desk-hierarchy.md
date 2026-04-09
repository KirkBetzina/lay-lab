# Vagabond Trading Desk - Hierarchy & Allocation

## Trader Roster

| Name | Role | Strategy | Status | Notes |
|------|------|----------|--------|-------|
| **Marcus** | Active | S1 (5-bar) | 🟢 Live | First S1 trader |
| **Diane** | Active | S3 (3-bar) | 🟢 Live | First S3 trader |
| **Chen** | Ready Bench | S1 | 🟢 On Deck | Watching Marcus, analyzing pairs |
| **Reyes** | Ready Bench | S3 | 🟢 On Deck | Watching Diane, analyzing pairs |
| **Kira** | Sandbox | S4 Training | 🔧 Fixing broken S4 | 5 losses - retraining |

## S4 Rule (Broken Version)
- **Trigger:** 5 losses in a row → Sandbox → Fix broken S4 → Ready Bench → Active
- **New traders:** Straight to Ready Bench (skip Sandbox)
- **Broken S4:** strategy-s4-broken.js - must fix before leaving Sandbox
- Good outcomes stored in `strategy-s4-outcomes/` for future reference
- Only excused from desk if cannot fix S4 after dedicated training attempt

## Bench Role (Active Monitoring)
- **Responsibility:** Scan all pairs, track PF shifts, report to Active traders
- **Task:** Keep pair list fresh - if PF drops, flag it. If new pair lights up, flag it.
- **Output:** Weekly pair update to Active traders with current high-PF pairs
- **Goal:** Bench guys stay engaged and fresh, Active guys always have best pairs

## Tier Flow
```
Active → slump → Sandbox → proves S4 → Ready Bench → Active
                        → Ready Bench (wait for spot)
```

## Fund Allocation Strategy

### The Logic
- S3 is the growth engine: high frequency, compounds fast
- S1/S2 are supplementary: catch what S3 misses, provide diversity
- Small account needs S3 driving the capital to grow

### Allocation

| Strategy | Allocation | Role |
|----------|------------|------|
| **S3** | **60%** | Growth engine |
| **S1** | 20% | Supplementary |
| **S2** | 20% | Supplementary |

### Position Sizing
| Strategy | Max Position Size | Risk per Trade |
|----------|-------------------|----------------|
| S3 (3-bar) | 5% of S3 pool | 1.5% SL |
| S1 (5-bar) | 10% of S1 pool | 1.5% SL |
| S2 (LDO) | 10% of S2 pool | 1.5% SL |

### Leverage Options
- **Trader's choice:** 2x or 3x leverage
- 2x = safer, $95 → $1,073 in 12 weeks
- 3x = higher risk/reward, $95 → $3,613 in 12 weeks
- 5x+ = NOT recommended (78%+ liquidation rate)

### Rules
1. **S1 gets first right** to capital at start of each week
2. **S3 pool is capped** - once depleted, no new S3 trades until reset
3. **S1 can dip into S3 pool** only if S3 pool is full AND S1 has high-confidence setup
4. **Weekly reset** - pools redistribute based on phase %

### Position Sizing
| Strategy | Max Position Size | Risk per Trade |
|----------|-------------------|----------------|
| S1 (5-bar) | 15% of S1 pool | 1.5% SL |
| S3 (3-bar) | 5% of S3 pool | 1.5% SL |

This keeps S1 meaningful (bigger bets, fewer trades) while S3 stays disciplined (smaller bets, more trades).

---

*Updated: 2026-04-08*