class CreateGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :genres do |t|
      t.string :genre, null: false
    end
    add_index :genres, :genre
  end
end
