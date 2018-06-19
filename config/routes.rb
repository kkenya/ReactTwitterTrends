Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'twitter_trends#index'
  resources :twitter_trends, only: [:index, :show] do
    resources :tweets, only: [:index]
  end
  resources :tweets, only: [:create]
end
