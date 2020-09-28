class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :artist_id, null: false
      t.integer :follower_id, null: false
    end
    add_index :follows, [:artist_id, :follower_id], unique: true
  end
end
