module ApplicationHelper
  def add_class(class_name)
    "class=\"#{class_name}\"" if controller_name == 'app' && action_name == 'index'
  end
end
