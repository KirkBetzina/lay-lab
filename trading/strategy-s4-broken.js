// =============================================================================
// S4 - THE BROKEN VERSION (For New Traders)
// =============================================================================
// This strategy is INTENTIONALLY BROKEN. Your job is to find and fix the bugs.
// Only when you can identify and correct the issues can you move to Ready Bench.
// =============================================================================

strategy("S4 - Broken Momentum", overlay=true, default_qty_type=strategy.percent_of_equity, default_qty_value=10)

// === INPUTS ===
stopLoss = input.float(1.5, "Stop Loss (%)") / 100
takeProfit = input.float(2.5, "Take Profit (%)") / 100
emaLength = input.int(20, "EMA Period")
rsiPeriod = input.int(14, "RSI Period")

// === INDICATORS (Intentional bugs included) ===
ema = ta.ema(close, emaLength)
rsi = ta.rsi(close, rsiPeriod)

// === BUG 1: Missing RSI bounds check ===
// RSI can go negative or above 100 with certain calculations - need to clamp

// === BUG 2: Entry logic is backwards ===
// This should enter LONG when price crosses ABOVE EMA, not below
longCondition = ta.crossover(close, ema)  // BUG: should be crossover for long
shortCondition = ta.crossunder(close, ema)  // BUG: should be crossunder for short

// === BUG 3: No position size check ===
// Strategy will keep entering without checking if already in a trade
// Causes pyramid positions which blows up the account

// === BUG 4: Exit logic uses wrong variable names ===
// These reference non-existent variables causing compile errors
if (longCondition)
    strategy.entry("Long", strategy.long)  // BUG: no position check

if (shortCondition)
    strategy.entry("Short", strategy.short)  // BUG: no position check

// === BUG 5: Stop/Limit prices calculated wrong ===
// Division instead of multiplication
longStop = strategy.position_avg_price / (1 - stopLoss)  // BUG: backwards
longLimit = strategy.position_avg_price * (1 - takeProfit)  // BUG: backwards

// === YOUR TASK ===
// 1. Fix the RSI bounds
// 2. Fix the entry logic direction
// 3. Add position size check
// 4. Fix exit price calculations
// 5. Test on historical data to verify profitability
// 6. Document your fixes and submit for review

plot(ema, "EMA", color.orange)
plot(rsi, "RSI", color.purple)

// === HINTS (For Trainer Use) ===
// - Long entry should trigger when price crosses ABOVE EMA (not below)
// - Always check strategy.position_size == 0 before entering
// - Exit prices: multiply for stop loss, divide for take profit
// - RSI needs ta.rsi() which returns 0-100 naturally, but check your math