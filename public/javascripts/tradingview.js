$(document).ready(function() {
 newTradeViewGraph();
});


function newTradeViewGraph() {
  new TradingView.MediumWidget({
    "container_id": "bigGraph",
    "symbols": [
      [
        "Apple",
        "AAPL "
      ],
      [
        "Google",
        "GOOGL"
      ],
      [
        "Yahoo!",
        "YHOO"
      ]
    ],
    "gridLineColor": "#E9E9EA",
    "fontColor": "#83888D",
    "underLineColor": "#F0F0F0",
    "timeAxisBackgroundColor": "#E9EDF2",
    "trendLineColor": "#FF7965",
    "width": '100%',
    "height": 350
  });
}