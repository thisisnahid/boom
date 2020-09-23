class UpdateGender < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :username
    remove_column :users, :gender
    add_column :users, :gender, :string
  end
end
