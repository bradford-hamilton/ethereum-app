class EthereumDataAggregatorJob < ApplicationJob
  queue_as :default

  def perform()
    while true do
      sleep 30

      new_price_point = HTTParty.get('https://api.coinbase.com/v2/prices/ETH-USD/spot').first[1]['amount']

      EthereumDataPoints.create(price: new_price_point)
    end
  end
end