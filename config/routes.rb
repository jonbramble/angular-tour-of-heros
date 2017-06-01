Rails.application.routes.draw do
  root 'home#index'

  resources :heroes, only: [:index, :show, :update]

  match '*path', to: 'home#index', via: [:get, :post]

  #https://programming.sereale.fr/2016/03/22/rails-and-angular2-react-the-tour-of-heroes/
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
