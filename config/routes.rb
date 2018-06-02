Rails.application.routes.draw do
  root 'twitter_trends#index'
  get 'tweet', to: 'tweet#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
