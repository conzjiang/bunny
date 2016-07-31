Rails.application.routes.draw do
  root to: 'static_pages#root'

  get 'login' => 'sessions#new'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :show, :destroy]
    resources :lists, only: [:index, :create]
  end
end
