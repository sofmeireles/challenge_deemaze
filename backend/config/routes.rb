Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/api/test', to: 'api/test#test'

  post '/api/user', to: 'api/users#create'
  post '/api/speciality', to: 'api/specialities#create'
end
