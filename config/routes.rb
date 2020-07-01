Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:create]
  resources :pets, only: [:index, :create]
  post "login", to: "authentication#login"
end