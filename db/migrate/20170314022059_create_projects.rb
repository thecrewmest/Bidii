class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.text :cover_image
      t.integer :progess
      t.boolean :is_archived
      t.datetime :date_archived
      t.decimal :budget
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
