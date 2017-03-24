Rails.application.routes.draw do

  root to: 'site#index'

  get '/dashboard', to: 'app#index'

  get '/signup', to: 'users#new'

  post '/signup', to: 'users#create'

  get '/login', to: 'sessions#new'

  post '/login', to: 'sessions#create'

  get '/logout', to: 'sessions#destroy'

  get '/drilldown', to: 'app#drill'

  get '/overview', to: 'app#overview'

  get '/budget', to: 'app#budget'

  get '/profile', to: 'app#profile'

  get '/tasksheet', to: 'app#tasksheet'

  get '/task', to: 'app#task'

  get '/collaborator', to: 'app#collaborator'

  get '/inventory', to: 'app#inventory'

  get '/forgot_password', to: 'sessions#forgot_password'

  namespace :api do
    namespace :v1 do
      resources :projects, only: [:index, :create, :destroy, :update]
      get '/archived', to: '/api/v1/projects#archived'
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
