Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    
    resources :users, only:[:create, :index] do
      # At this point, we need the user id, so we nest this route
      resources :posts, only:[:create]
    end

    resource :session, only:[:create, :destroy]
    
    resources :posts, only:[:index, :show] do 
      # At this point, the user is no longer relevant, okay to have this top level route
      resources :likes, only:[:create, :destroy]
    end 

    # delete '/likes', to:

    # delete '/likes', to: 'likes#destroy'
    resources :likes, only:[:destroy]

  end

end
