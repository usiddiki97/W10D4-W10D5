# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                 api_todos GET    /api/todos(.:format)                                                                     api/todos#index {:format=>:json}
#                           POST   /api/todos(.:format)                                                                     api/todos#create {:format=>:json}
#                  api_todo GET    /api/todos/:id(.:format)                                                                 api/todos#show {:format=>:json}
#                           PATCH  /api/todos/:id(.:format)                                                                 api/todos#update {:format=>:json}
#                           PUT    /api/todos/:id(.:format)                                                                 api/todos#update {:format=>:json}
#                           DELETE /api/todos/:id(.:format)                                                                 api/todos#destroy {:format=>:json}
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do  
    resources :todos, only: [:index, :show, :create, :update, :destroy] 
  end 

end
