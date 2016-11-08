class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :postid
      t.text :username
      t.text :type
      t.text :title
      t.text :content
      t.string :tag
      t.timestamp :date
      t.integer :reports
      t.integer :points
      t.integer :comments

      t.timestamps null: false
    end
    add_index :posts, :postid, unique: true
  end
end
