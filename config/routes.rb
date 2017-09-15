Rails.application.routes.draw do
  root to: 'welcome#index'
  get '/ethereum' => 'ethereum#index'
  get '/api' => 'api#get_all'
end
