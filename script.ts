import OkotokiAPI, { Exchanges, InMessage } from 'okotoki'

const API_KEY = 'DEMO_API_KEY'
const API_SECRET = 'DEMO_API_SECRET'

const api = new OkotokiAPI({
  key: API_KEY,
  secret:API_SECRET,
  debug: true
})

api.onMessage = (msg: any) => {
  console.log(msg)
}

api.subscribe([
  { kind: 'index', coin: 'BTC' },
  { kind: 'index', coin: 'ETH' },
  { symbol: 'XBTUSDT', exchange: Exchanges.bitmex, kind: 'price' },
  {
    symbol: 'XBT_USDT',
    exchange: Exchanges.bitmex,
    kind: 'largeTrades',
    thresholdTrades: 50000,
    limitTrades: 30,
    thresholdLiquidations: 0,
    limitLiquidations: 30
  },
  {
    symbol: 'XBTUSD',
    exchange: Exchanges.bitmex,
    kind: 'tradeVolume'
  },
  {
    kind: 'orderBook',
    exchange: Exchanges.binanceD,
    symbol: 'BTCBUSD',
    step: 10,
    rate: 200
  }
])

api.tradeAndLiquidation(
  [
    [Exchanges.bitmex, 'XBT_USDT'],
    [Exchanges.bitmex, 'XBTUSD']
  ],
  {
    thresholdTrades: 50000,
    thresholdLiquidations: 0,
    limitLiquidations: 30,
    limitTrades: 30
  }
)

api.index(['BTC', 'ETH', 'BNB', 'AAVE', 'ATOM', 'EOS', 'LINK', 'UNI'])

api.orderbook(
  [
    [Exchanges.bitmex, 'XBT_USDT'],
    [Exchanges.bitmex, 'XBTUSD']
  ],
  {
    step: 10,
    rate: 200
  }
)