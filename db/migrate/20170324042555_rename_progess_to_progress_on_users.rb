class RenameProgessToProgressOnUsers < ActiveRecord::Migration[5.0]
  def change
    rename_column :projects, :progess, :progress
  end
end
