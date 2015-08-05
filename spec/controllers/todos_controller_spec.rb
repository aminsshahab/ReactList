require 'rails_helper'

RSpec.describe 'TodosController', type: :request do

  before(:each){
    Todo.create(description: "Description", name: 'Name')
  }

  def create_todo!(todo_list, attributes={})
    post "todos", todos: attributes
    expect(response.status).to eq 201
    expect(response.content_type).to eq 'application/json'
    task = JSON.parse(response.body)
    expect(task['id']).to be_present
    expect(task['name']).to eq attributes[:name]
    expect(task['description']).to eq attributes[:description]
    todo
  end

  describe "GET #index" do
    it "returns http success" do
      get "/todos", {}, { Accept: :json }
      expect(response.status).to eq 200
    end
    it "returns a json object that is an array of todos" do
      get "/todos", {}, { Accept: :json }
      expect(JSON.parse(response.body)[0]["description"]).to eq "Description"
      expect(JSON.parse(response.body)[0]["name"]).to eq "Name"
    end
  end

  describe "delete #destroy" do
    it "returns http success" do
      delete "/todos/#{Todo.last.id}", {}, {Accept: :json}
      expect(response).to have_http_status(:success)
    end
  end
end
