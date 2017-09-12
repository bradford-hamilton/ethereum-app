Rails.application.routes.draw do
  root to: 'welcome#index'
  get 'ethereum' => 'ethereum#index'
end
