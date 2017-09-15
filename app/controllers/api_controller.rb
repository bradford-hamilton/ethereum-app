class ApiController < ApplicationController
  def get_all
    render :json => EthereumDataPoints.all.order(created_at: :desc)
  end
end