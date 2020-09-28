class UpdateTracks < ActiveRecord::Migration[5.2]
  def change
    remove_column :tracks, :aws_url
    remove_column :tracks, :description
  end
end
