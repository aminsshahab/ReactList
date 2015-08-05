class TodosController < ApplicationController
  def index
    render json: Todo.all.order(created_at: :desc)
  end

  def new
    @todo = Todo.new
  end

  def create
    todo = Todo.new(todo_params)

    if todo.save
      render json: todo, status: :created
    else
      render_erros(todo)
    end
  end

  def destroy
    todo = Todo.find(params[:id])
    if todo.destroy
      render json: todo
    else
      render_errors(todo)
    end
  end

  def update
    todo = Todo.find(params[:id])
    if todo.completed == false
      todo.update_attributes(completed: true)
    else
      todo.update_attributes(completed: false)
    end
    render json: todo
  end

  private

  def render_errors(todo)
    render json: {
      error: todo.errors.full_messages.join(', ')
    }, status: :bad_request
  end

  def todo_params
    params.require(:todo).permit(:description, :name)
  end

end
