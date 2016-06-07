Rails.application.routes.draw do
  root 'post#new'

  post 'post' => 'post#create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
