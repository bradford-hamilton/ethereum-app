class EthereumDataPoints < ActiveRecord::Base
  validates :price, presence: true
end