from scrapy.spider import BaseSpider
from scrapy.selector import HtmlXPathSelector
from motif_investing.items import MotifInvesting
from scrapy.http import Request

import code; # code.interact(local=locals())

class MySpider(BaseSpider):
  name        = "motif"
  allowed_domains = ["motifinvesting.com"]
  # start_urls  = ["https://motifinvesting.com/"]
  start_urls  = ["https://www.motifinvesting.com/motifs/small-cap-stars"]

  def parse(self, response):
    hxs     = HtmlXPathSelector(response)

    tickers = hxs.select('//td[@class="symbol"] /span/text()').extract()

    titles  = hxs.select('//h1/text()').extract()
    for ticker in tickers:
      item = MotifInvesting()
      item["ticker"] = ticker
      yield item

