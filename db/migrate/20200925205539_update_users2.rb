class UpdateUsers2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :img_url
    add_column :users, :location, :string
    add_column :users, :genre_id, :integer
    add_index :users, :genre_id 
  end
end
