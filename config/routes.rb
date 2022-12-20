Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get 'rooms/index'
  root 'pages#home'
  devise_for :users
  devise_scope :user do
    get 'users', to: 'devise/sessions#new'
  end

  resources :rooms do
    resources :messages
  end

  get 'user/:id', to: 'users#show', as: 'user'
end
