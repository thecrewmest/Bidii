class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone
      t.string :company
      t.text :profile_image
      t.string :password_digest
      t.text :remember_digest
      t.string :email
      t.string :email

      t.timestamps
    end
    add_index :users, :email, unique: true
  end
end
