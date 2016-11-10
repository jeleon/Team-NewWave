json.extract! post, :id, :username, :posttype, :title, :content, :tag, :reports, :points, :comments, :created_at, :updated_at
json.url post_url(post, format: :json)