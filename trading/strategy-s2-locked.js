//@version=6
strategy("S2 - LDO 5-Bar + EMA 10 | SL 1.5% TP 2.5% | LOCKED",
 default_qty_type=strategy.fixed,
 default_qty_value=10,
 initial_capital=100)

// === INPUTS (LOCKED CONFIG FOR LDO) ===
slPercent = input.float(1.5, "Stop Loss %") / 100
tpPercent = input.float(2.5, "Take Profit %") / 100
emaLength = input.int(10, "EMA Period")
consecutive = input.int(5, "Consecutive Candles")

// === EMA ===
ema = ta.ema(close, emaLength)
trendUp = close > ema
trendDown = close < ema

// === SIGNALS ===
// 5 consecutive red candles = potential SHORT
// 5 consecutive green candles = potential LONG
isRed5 = close[1] < open[1] and close[2] < open[2] and close[3] < open[3] and close[4] < open[4] and close[5] < open[5]
isGreen5 = close[1] > open[1] and close[2] > open[2] and close[3] > open[3] and close[4] > open[4] and close[5] > open[5]

longSignal = isGreen5 and trendUp and strategy.position_size == 0
shortSignal = isRed5 and trendDown and strategy.position_size == 0

// === ENTRIES ===
if (longSignal)
    strategy.entry("Long", strategy.long)

if (shortSignal)
    strategy.entry("Short", strategy.short)

// === EXITS ===
if (strategy.position_size > 0)
    strategy.exit("Long_Exit", "Long", 
     stop=strategy.position_avg_price * (1 - slPercent),
     limit=strategy.position_avg_price * (1 + tpPercent))

if (strategy.position_size < 0)
    strategy.exit("Short_Exit", "Short",
     stop=strategy.position_avg_price * (1 + slPercent),
     limit=strategy.position_avg_price * (1 - tpPercent))

// === PLOTS ===
plot(ema, "EMA", color.orange)