json.extract! post, :id, :postid, :username, :type, :title, :content, :tag, :date, :reports, :points, :comments, :created_at, :updated_at
json.url post_url(post, format: :json)