class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string   :title, null: false
      t.string   :aws_url, null: false
      t.integer  :artist_id, null: false
      t.integer  :genre_id
      t.text     :description

      t.timestamps
    end
    add_index :tracks, :title
    add_index :tracks, :artist_id
    add_index :tracks, :genre_id
  end
end
